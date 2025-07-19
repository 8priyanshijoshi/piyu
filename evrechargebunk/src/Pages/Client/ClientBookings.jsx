import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseconfig";

export default function ClientBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const snapshot = await getDocs(collection(db, "client_bookings"));
        const bookingData = [];

        for (let docSnap of snapshot.docs) {
          const data = docSnap.data();
          const bunkRef = doc(db, "bunk_locations", data.bunkId);
          const bunkSnap = await getDoc(bunkRef);
          const bunkInfo = bunkSnap.exists() ? bunkSnap.data() : {};

          bookingData.push({
            id: docSnap.id,
            ...data,
            bunkName: bunkInfo.name || "Unknown",
            bunkAddress: bunkInfo.address || "N/A"
          });
        }

        setBookings(bookingData);
      } catch (err) {
        alert("Failed to load bookings: " + err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div style={pageStyle}>
      <h2 style={titleStyle}>📄 My Bookings</h2>
      {loading ? (
        <p style={infoText}>Loading your bookings...</p>
      ) : bookings.length === 0 ? (
        <p style={infoText}>No bookings found.</p>
      ) : (
        <div style={gridStyle}>
          {bookings.map(booking => (
            <div key={booking.id} style={cardStyle}>
              <h3 style={bunkName}>{booking.bunkName}</h3>
              <p style={infoText}>📍 {booking.bunkAddress}</p>
              <p style={infoText}>🔌 {booking.chargerType}</p>
              <p style={infoText}>🕒 {booking.startTime} – {booking.endTime}</p>
              <p style={infoText}>📅 {booking.bookingDate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// 💅 Styles
const pageStyle = {
  padding: "40px",
  fontFamily: "'Segoe UI', sans-serif",
  backgroundColor: "#f1f5f9",
  minHeight: "100vh"
};

const titleStyle = {
  color: "#0f172a",
  fontSize: "28px",
  marginBottom: "20px"
};

const infoText = {
  color: "#475569",
  marginBottom: "8px"
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "24px"
};

const cardStyle = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
};

const bunkName = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#0f172a",
  marginBottom: "10px"
};
