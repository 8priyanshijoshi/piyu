import React, { useEffect, useState } from "react";
import { db } from "../../firebaseconfig";
import { collection, getDocs } from "firebase/firestore";

// Simple Haversine distance calculation
function getDistance(lat1, lng1, lat2, lng2) {
  const R = 6371; // Earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export default function NearbyBunks() {
  const [userLocation, setUserLocation] = useState(null);
  const [bunks, setBunks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      (error) => {
        alert("⚠️ Location permission denied");
        setLoading(false);
      }
    );
  }, []);

  useEffect(() => {
    if (!userLocation) return;

    const fetchBunks = async () => {
      try {
        const snapshot = await getDocs(collection(db, "bunk_locations"));
        const bunkList = snapshot.docs.map((doc) => {
          const data = doc.data();
          const distance = getDistance(
            userLocation.lat,
            userLocation.lng,
            data.coordinates.lat,
            data.coordinates.lng
          );
          return {
            id: doc.id,
            name: data.name,
            address: data.address,
            mobile: data.mobile || "N/A",
            coordinates: data.coordinates,
            chargerTypes: data.chargerTypes || [],
            distance: distance.toFixed(2)
          };
        });

        const sorted = bunkList.sort((a, b) => a.distance - b.distance);
        setBunks(sorted);
      } catch (err) {
        alert("❌ Error fetching bunk data");
      } finally {
        setLoading(false);
      }
    };

    fetchBunks();
  }, [userLocation]);

  return (
    <div style={{ padding: "30px", fontFamily: "'Segoe UI', sans-serif", background: "#f1f5f9" }}>
      <h2 style={{ textAlign: "center", color: "#1e293b", marginBottom: "20px" }}>
        🔍 Nearby EV Recharge Bunks
      </h2>

      {loading ? (
        <p style={{ textAlign: "center", color: "#64748b" }}>Fetching location and bunks...</p>
      ) : bunks.length === 0 ? (
        <p style={{ textAlign: "center", color: "#64748b" }}>No bunks found nearby.</p>
      ) : (
        <div style={{ display: "grid", gap: "20px", maxWidth: "800px", margin: "auto" }}>
          {bunks.map((bunk) => (
            <div
              key={bunk.id}
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
              }}
            >
              <h3 style={{ marginBottom: "10px", color: "#0f172a" }}>{bunk.name}</h3>
              <p style={{ margin: "4px 0", color: "#475569" }}>📍 {bunk.address}</p>
              <p style={{ margin: "4px 0", color: "#475569" }}>📞 {bunk.mobile}</p>
              <p style={{ margin: "4px 0", color: "#475569" }}>
                🔌 {bunk.chargerTypes.join(", ")}
              </p>
              <p style={{ margin: "4px 0", color: "#475569" }}>
                📏 {bunk.distance} km away
              </p>
              <a
                href={`https://www.google.com/maps?q=${bunk.coordinates.lat},${bunk.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "12px",
                  padding: "8px 12px",
                  background: "#38bdf8",
                  color: "white",
                  borderRadius: "6px",
                  textDecoration: "none"
                }}
              >
                🗺️ View on Map
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
