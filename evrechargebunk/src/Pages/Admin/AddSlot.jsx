import React, { useState, useEffect } from "react";
import { db } from "../../firebaseconfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

export default function AddSlot() {
  const [bunks, setBunks] = useState([]);
  const [form, setForm] = useState({
    bunkId: "",
    startTime: "",
    endTime: "",
    chargerType: "",
    price: ""
  });

  useEffect(() => {
    const fetchBunks = async () => {
      try {
        const snapshot = await getDocs(collection(db, "bunk_locations"));
        const list = snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name
        }));
        setBunks(list);
      } catch (err) {
        alert("Failed to fetch bunks");
      }
    };
    fetchBunks();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(
        collection(db, `bunk_locations/${form.bunkId}/recharge_slots`),
        {
          startTime: form.startTime,
          endTime: form.endTime,
          chargerType: form.chargerType,
          isBooked: false,
          price: "",
          createdAt: new Date()
        }
      );
      alert("✅ Slot added successfully!");
      setForm({
        bunkId: "",
        startTime: "",
        endTime: "",
        chargerType: "",
        price: ""
      });
    } catch (err) {
      alert("❌ Error: " + err.message);
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>⏱️ Add Recharge Slot</h2>
      <form onSubmit={handleSubmit}>
        <div style={fieldStyle}>
          <label style={labelStyle}>Bunk Location</label>
          <select
            name="bunkId"
            value={form.bunkId}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value="">Select Bunk</option>
            {bunks.map((bunk) => (
              <option key={bunk.id} value={bunk.id}>
                {bunk.name}
              </option>
            ))}
          </select>
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>Start Time</label>
          <input
            type="time"
            name="startTime"
            value={form.startTime}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>End Time</label>
          <input
            type="time"
            name="endTime"
            value={form.endTime}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>Charger Type</label>
          <select
            name="chargerType"
            value={form.chargerType}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value="">Select Type</option>
            <option value="Type2">Type2</option>
            <option value="CCS2">CCS2</option>
            <option value="CHAdeMO">CHAdeMO</option>
          </select>
        </div>

        <button type="submit" style={buttonStyle}>
          Save Slot
        </button>
      </form>
    </div>
  );
}

const containerStyle = {
  maxWidth: "600px",
  margin: "40px auto",
  padding: "30px",
  background: "#ffffff",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
  fontFamily: "'Segoe UI', sans-serif"
};

const titleStyle = {
  textAlign: "center",
  color: "#1e293b",
  fontSize: "26px",
  marginBottom: "24px",
  borderBottom: "2px solid #38bdf8",
  paddingBottom: "10px"
};

const fieldStyle = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "18px"
};

const labelStyle = {
  marginBottom: "6px",
  color: "#334155",
  fontWeight: "500"
};

const inputStyle = {
  padding: "10px",
  border: "1px solid #cbd5e1",
  borderRadius: "6px",
  fontSize: "16px",
  outline: "none",
  transition: "border-color 0.3s ease"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#0ea5e9",
  color: "white",
  fontSize: "16px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "background 0.3s ease"
};

