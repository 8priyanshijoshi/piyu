import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../../firebaseconfig";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

export default function BunkDetails() {
  const { bunkId } = useParams();
  const [bunk, setBunk] = useState(null);
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [slotData, setSlotData] = useState(null);


  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const bunkRef = doc(db, "bunk_locations", bunkId);
        const bunkSnap = await getDoc(bunkRef);
        if (bunkSnap.exists()) {
          setBunk(bunkSnap.data());

          const slotSnap = await getDocs(collection(bunkRef, "recharge_slots"));
          const slotList = slotSnap.docs
            .map(doc => ({ id: doc.id, ...doc.data() }))
            .filter(slot => !slot.isBooked);
          setSlots(slotList);
        } else {
          alert("Bunk not found");
        }
      } catch (err) {
        alert("Error loading bunk: " + err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [bunkId]);

  return (
    <div style={pageStyle}>
      {loading ? (
        <p style={loadingText}>Loading bunk details...</p>
      ) : bunk ? (
        <>
          {/* Bunk Info */}
          <div style={bunkCard}>
            <h2 style={bunkTitle}>{bunk.name}</h2>
            <p style={infoText}>📍 {bunk.address}</p>
            <p style={infoText}>📞 {bunk.mobile || "N/A"}</p>
            <p style={infoText}>🔌 {bunk.chargerTypes?.join(", ")}</p>
            <a
              href={`https://www.google.com/maps?q=${bunk.coordinates.lat},${bunk.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              style={mapButton}
            >
              🗺️ View on Map
            </a>
          </div>

          {/* Slot Section */}
          <h3 style={sectionTitle}>⏱️ Available Recharge Slots</h3>
          {slots.length === 0 ? (
            <p style={loadingText}>No slots available right now.</p>
          ) : (
            <div style={slotGrid}>
              {slots.map(slot => (
                    <div key={slot?.id}>
                        <p>🕒 {slot?.startTime} – {slot?.endTime}</p>
                        <p>🔌 Charger: {slot?.chargerType}</p>
                        <p>💰 Price: ₹{slot?.price ?? "N/A"}</p>
                  <Link
                    to={`/book/${bunkId}/${slot.id}`}
                    style={bookButton}
                  >
                    ✅ Book Now
                  </Link>
                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <p style={loadingText}>Bunk not found.</p>
      )}
    </div>
  );
}

// 🎨 Styles
const pageStyle = {
  padding: "40px",
  fontFamily: "'Segoe UI', sans-serif",
  background: "#f1f5f9",
  minHeight: "100vh"
};

const loadingText = {
  textAlign: "center",
  color: "#64748b"
};

const bunkCard = {
  background: "#ffffff",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
  marginBottom: "30px"
};

const bunkTitle = {
  color: "#0f172a",
  fontSize: "26px",
  marginBottom: "10px"
};

const infoText = {
  color: "#475569",
  marginBottom: "6px"
};

const mapButton = {
  display: "inline-block",
  marginTop: "12px",
  padding: "8px 12px",
  backgroundColor: "#38bdf8",
  color: "#ffffff",
  textDecoration: "none",
  borderRadius: "6px"
};

const sectionTitle = {
  color: "#1e293b",
  marginBottom: "20px"
};

const slotGrid = {
  display: "grid",
  gap: "18px"
};

const slotCard = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
};

const slotText = {
  marginBottom: "6px",
  color: "#334155"
};

const bookButton = {
  display: "inline-block",
  marginTop: "10px",
  padding: "8px 12px",
  backgroundColor: "#0ea5e9",
  color: "#ffffff",
  textDecoration: "none",
  borderRadius: "6px"
};
