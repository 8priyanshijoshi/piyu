import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseconfig";

export default function ClientHome() {
  const [featuredBunks, setFeaturedBunks] = useState([]);
const [myBookings, setMyBookings] = useState([]);

useEffect(() => {
  const fetchMyBookings = async () => {
    const bookingSnap = await getDocs(collection(db, "client_bookings"));
    const bookingList = bookingSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setMyBookings(bookingList.slice(0, 2)); // latest 2
  };
  fetchMyBookings();
}, []);

  useEffect(() => {
    const fetchBunks = async () => {
      try {
        const bunkSnap = await getDocs(collection(db, "bunk_locations"));
        const bunkList = bunkSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setFeaturedBunks(bunkList.slice(0, 3)); // show top 3 bunks
      } catch (error) {
        console.error("Error fetching bunks:", error);
      }
    };
    fetchBunks();
  }, []);

  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <section style={heroStyle}>
        <h1 style={headingStyle}>⚡ Find Your Nearest EV Bunk</h1>
        <p style={subtextStyle}>Recharge your electric journey — quick, reliable, and nearby.</p>
        <Link to="/nearbybunks" style={ctaButton}>🔍 Search Bunks</Link>
      </section>

      {/* Feature Highlights */}
      <section style={featuresWrapper}>
        <div style={featureCard}>
          <h3 style={featureTitle}>📍 Location-Based Search</h3>
          <p style={featureDesc}>Discover EV bunks closest to you in real time.</p>
        </div>
        <div style={featureCard}>
          <h3 style={featureTitle}>⏱️ View Slot Availability</h3>
          <p style={featureDesc}>Check which slots are open — and when.</p>
        </div>
        <div style={featureCard}>
          <h3 style={featureTitle}>📞 Direct Contact & Map</h3>
          <p style={featureDesc}>Quick access to bunk details with map integration.</p>
        </div>
      </section>

      {/* Featured Bunks Preview */}
      <h3 style={{ textAlign: "center", marginTop: "60px", color: "#0f172a" }}>🏪 Featured EV Bunks</h3>
      <section style={featuresWrapper}>
        {featuredBunks.map(bunk => (
          <div key={bunk.id} style={featureCard}>
            <h4 style={featureTitle}>{bunk.name}</h4>
            <p style={featureDesc}>📍 {bunk.address}</p>
            <p style={featureDesc}>🔌 {bunk.chargerTypes?.join(", ")}</p>
            <Link to={`/bunk/${bunk.id}`} style={ctaButton}>🔎 View Details</Link>
          </div>
        ))}
      </section>

      <h3 style={{ textAlign: "center", marginTop: "60px", color: "#0f172a" }}>📄 My Bookings</h3>
<section style={featuresWrapper}>
  {myBookings.length === 0 ? (
    <p style={featureDesc}>You haven't booked any slots yet.</p>
  ) : (
    myBookings.map(booking => (
      <div key={booking.id} style={featureCard}>
        <h4 style={featureTitle}>{booking.chargerType}</h4>
        <p style={featureDesc}>🕒 {booking.startTime} – {booking.endTime}</p>
        <p style={featureDesc}>📅 {booking.bookingDate || "N/A"}</p>
        <Link to={`/bunk/${booking.bunkId}`} style={ctaButton}>📍 View Bunk</Link>
      </div>
    ))
  )}
</section>

      {/* Footer */}
      <footer style={footerStyle}>
        <p>🌱 Powered by EV Grid | Designed for sustainability</p>
      </footer>
    </div>
  );
}

// 🎨 Styles
const containerStyle = {
  fontFamily: "'Segoe UI', sans-serif",
  backgroundColor: "#f1f5f9",
  minHeight: "100vh",
  paddingBottom: "40px"
};

const heroStyle = {
  textAlign: "center",
  padding: "80px 20px",
  background: "#0ea5e9",
  color: "white",
  borderBottomLeftRadius: "30px",
  borderBottomRightRadius: "30px"
};

const headingStyle = {
  fontSize: "38px",
  fontWeight: "bold",
  marginBottom: "14px"
};

const subtextStyle = {
  fontSize: "18px",
  marginBottom: "30px",
  opacity: 0.9
};

const ctaButton = {
  padding: "12px 24px",
  fontSize: "16px",
  background: "#ffffff",
  color: "#0ea5e9",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "600",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  display: "inline-block",
  marginTop: "12px"
};

const featuresWrapper = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "30px",
  padding: "40px 20px",
  maxWidth: "1000px",
  margin: "40px auto"
};

const featureCard = {
  backgroundColor: "#ffffff",
  padding: "24px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
};

const featureTitle = {
  fontSize: "20px",
  color: "#0f172a",
  marginBottom: "10px"
};

const featureDesc = {
  fontSize: "16px",
  color: "#475569"
};

const footerStyle = {
  textAlign: "center",
  padding: "30px",
  fontSize: "14px",
  color: "#64748b"
};
