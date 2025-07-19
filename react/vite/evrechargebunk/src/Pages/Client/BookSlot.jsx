// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { db } from "../../firebaseconfig";
// import {
//   doc,
//   getDoc,
//   setDoc,
//   updateDoc,
//   collection
// } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// export default function BookSlot() {
//   const { bunkId, slotId } = useParams();
//   const [slot, setSlot] = useState(null);
//   const [bunk, setBunk] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [booked, setBooked] = useState(false);
//   const navigate = useNavigate();
//   const auth = getAuth();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const bunkSnap = await getDoc(doc(db, "bunk_locations", bunkId));
//         const slotSnap = await getDoc(doc(db, `bunk_locations/${bunkId}/recharge_slots`, slotId));
//         if (bunkSnap.exists() && slotSnap.exists()) {
//           setBunk(bunkSnap.data());
//           setSlot(slotSnap.data());
//         } else {
//           alert("Invalid bunk or slot");
//         }
//       } catch (err) {
//         alert("Error loading data: " + err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [bunkId, slotId]);

//   const handleBooking = async () => {
//     try {
//       const userId = auth.currentUser.uid;
//       const bookingId = `${userId}_${slotId}`; // Unique key

//       // Create booking
//       await setDoc(doc(db, "bookings", bookingId), {
//         userId,
//         bunkId,
//         slotId,
//         startTime: slot.startTime,
//         endTime: slot.endTime,
//         chargerType: slot.chargerType,
//         status: "confirmed",
//         createdAt: new Date()
//       });

//       // Update slot as booked
//       await updateDoc(doc(db, `bunk_locations/${bunkId}/recharge_slots`, slotId), {
//         isBooked: true
//       });

//       setBooked(true);
//     } catch (err) {
//       alert("Booking failed: " + err.message);
//     }
//   };

//   if (loading) return <p style={{ textAlign: "center", color: "#64748b" }}>Loading slot details...</p>;

//   if (booked) return (
//     <div style={containerStyle}>
//       <h2 style={titleStyle}>✅ Booking Confirmed!</h2>
//       <p style={infoStyle}>📍 {bunk.name} – {bunk.address}</p>
//       <p style={infoStyle}>🕒 {slot.startTime} – {slot.endTime}</p>
//       <p style={infoStyle}>🔌 Charger: {slot.chargerType}</p>
//       <button onClick={() => navigate("/my-bookings")} style={buttonStyle}>
//         📄 View My Bookings
//       </button>
//     </div>
//   );

//   return (
//     <div style={containerStyle}>
//       <h2 style={titleStyle}>🧾 Confirm Slot Booking</h2>
//       <p style={infoStyle}>📍 {bunk.name} – {bunk.address}</p>
//       <p style={infoStyle}>🕒 {slot.startTime} – {slot.endTime}</p>
//       <p style={infoStyle}>🔌 Charger: {slot.chargerType}</p>
//       <button onClick={handleBooking} style={buttonStyle}>
//         ✅ Book This Slot
//       </button>
//     </div>
//   );
// }

// // 🎨 Styles
// const containerStyle = {
//   padding: "40px",
//   fontFamily: "'Segoe UI', sans-serif",
//   background: "#f1f5f9",
//   minHeight: "100vh",
//   textAlign: "center"
// };

// const titleStyle = {
//   fontSize: "28px",
//   color: "#1e293b",
//   marginBottom: "20px"
// };

// const infoStyle = {
//   fontSize: "18px",
//   color: "#475569",
//   marginBottom: "12px"
// };

// const buttonStyle = {
//   padding: "12px 20px",
//   backgroundColor: "#0ea5e9",
//   color: "white",
//   fontSize: "16px",
//   borderRadius: "8px",
//   border: "none",
//   cursor: "pointer"
// };


import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../../firebaseconfig";
import { doc, getDoc, collection, addDoc, updateDoc } from "firebase/firestore";

export default function BookSlot() {
  const { bunkId, slotId } = useParams();
  const [slotData, setSlotData] = useState(null);
  const [bunkData, setBunkData] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bunkRef = doc(db, "bunk_locations", bunkId);
        const bunkSnap = await getDoc(bunkRef);

        const slotRef = doc(bunkRef, "recharge_slots", slotId);
        const slotSnap = await getDoc(slotRef);

        if (bunkSnap.exists() && slotSnap.exists()) {
          setBunkData(bunkSnap.data());
          setSlotData(slotSnap.data());
        } else {
          alert("Invalid bunk or slot reference.");
        }
      } catch (err) {
        alert("Error loading slot: " + err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [bunkId, slotId]);

 const handleConfirm = async () => {
  try {
    const bookingDetails = {
      bunkId,
      slotId,
      chargerType: slotData.chargerType,
      startTime: slotData.startTime,
      endTime: slotData.endTime,
      price:slotData.price,
      bookingDate: new Date().toLocaleDateString()
    };

    // Save to client bookings
    await addDoc(collection(db, "client_bookings"), bookingDetails);

    // Save to admin bookings (if admin uses separate tracking)
    await addDoc(collection(db, "admin_bookings"), bookingDetails);

    // Optional: update slot status
    const slotRef = doc(db, "bunk_locations", bunkId, "recharge_slots", slotId);
    await updateDoc(slotRef, {
      isBooked: true,
      bookedBy: "client_user_id_or_name", // optional
      bookingTimestamp: Date.now()        // optional
    });

    setConfirmed(true);
  } catch (err) {
    alert("Failed to confirm booking: " + err.message);
  }
};


  return (
    <div style={pageStyle}>
      {loading ? (
        <p style={infoText}>Loading slot details...</p>
      ) : confirmed ? (
        <div style={cardStyle}>
          <h2 style={titleStyle}>✅ Booking Confirmed!</h2>
          <p style={infoText}>
            You booked a slot at <strong>{bunkData?.name}</strong>
          </p>
          <Link to="/my-bookings" style={ctaButton}>📄 View My Bookings</Link>
        </div>
      ) : (
        <div style={cardStyle}>
          <h2 style={titleStyle}>🔌 Confirm Your Booking</h2>
          <p style={infoText}>Bunk: <strong>{bunkData?.name}</strong></p>
          <p style={infoText}>📍 {bunkData?.address}</p>
          <p style={infoText}>🕒 {slotData?.startTime} – {slotData?.endTime}</p>
          <p style={infoText}>🔌 Charger: {slotData?.chargerType}</p>
          <button onClick={handleConfirm} style={confirmButton}>✅ Confirm Booking</button>
        </div>
      )}
    </div>
  );
}

// 🎨 Styles
const pageStyle = {
  padding: "40px",
  fontFamily: "'Segoe UI', sans-serif",
  backgroundColor: "#f1f5f9",
  minHeight: "100vh"
};

const cardStyle = {
  background: "#ffffff",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  maxWidth: "600px",
  margin: "40px auto",
  textAlign: "center"
};

const titleStyle = {
  fontSize: "26px",
  color: "#0f172a",
  marginBottom: "16px"
};

const infoText = {
  fontSize: "16px",
  color: "#475569",
  marginBottom: "8px"
};

const confirmButton = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#0ea5e9",
  color: "#ffffff",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginTop: "20px"
};

const ctaButton = {
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#38bdf8",
  color: "#ffffff",
  textDecoration: "none",
  borderRadius: "8px",
  display: "inline-block",
  marginTop: "20px"
};

