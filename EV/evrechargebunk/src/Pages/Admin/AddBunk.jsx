import React, { useState } from "react";
import { db } from "../../firebaseconfig";
import { collection, addDoc } from "firebase/firestore";

export default function AddBunk() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    lat: "",
    lng: "",
    chargerTypes: "",
    totalSlots: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bunk = {
      name: formData.name,
      address: formData.address,
      coordinates: {
        lat: parseFloat(formData.lat),
        lng: parseFloat(formData.lng)
      },
      chargerTypes: formData.chargerTypes.split(",").map(type => type.trim()),
      totalSlots: parseInt(formData.totalSlots),
      isActive: true,
      createdAt: new Date()
    };

    try {
      await addDoc(collection(db, "bunk_locations"), bunk);
      alert("✅ Bunk added successfully!");
      setFormData({
        name: "",
        address: "",
        lat: "",
        lng: "",
        chargerTypes: "",
        totalSlots: ""
      });
    } catch (err) {
      alert("❌ Error adding bunk: " + err.message);
    }
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>➕ Add New Bunk</h2>
      <form onSubmit={handleSubmit}>
        {["name", "address", "lat", "lng", "chargerTypes", "totalSlots"].map((field) => (
          <div key={field} style={fieldStyle}>
            <label htmlFor={field} style={labelStyle}>
              {field === "lat" ? "Latitude" :
               field === "lng" ? "Longitude" :
               field === "chargerTypes" ? "Charger Types (comma-separated)" :
               field === "totalSlots" ? "Total Slots" :
               field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === "lat" || field === "lng" || field === "totalSlots" ? "number" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>
        ))}
        <button type="submit" style={buttonStyle}>Save Bunk</button>
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

