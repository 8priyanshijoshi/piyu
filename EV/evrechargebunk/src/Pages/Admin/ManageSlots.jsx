import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";
import { db } from "../../firebaseconfig";

export default function ManageSlots() {
  const [bunks, setBunks] = useState([]);
  const [selectedBunkId, setSelectedBunkId] = useState("");
  const [slots, setSlots] = useState([]);
  const [editingSlot, setEditingSlot] = useState(null);
  const [editData, setEditData] = useState({
    startTime: "",
    endTime: "",
    chargerType: ""
  });

  useEffect(() => {
    const fetchBunks = async () => {
      const bunkSnap = await getDocs(collection(db, "bunk_locations"));
      const bunkList = bunkSnap.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name
      }));
      setBunks(bunkList);
    };
    fetchBunks();
  }, []);

  const fetchSlots = async (bunkId) => {
    const slotSnap = await getDocs(collection(db, `bunk_locations/${bunkId}/recharge_slots`));
    const slotList = slotSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setSlots(slotList);
  };

  const handleDelete = async (slotId) => {
    await deleteDoc(doc(db, `bunk_locations/${selectedBunkId}/recharge_slots`, slotId));
    fetchSlots(selectedBunkId);
  };

  const handleEditOpen = (slot) => {
    setEditingSlot(slot);
    setEditData({
      startTime: slot.startTime,
      endTime: slot.endTime,
      chargerType: slot.chargerType
    });
  };

  const handleEditSave = async () => {
    await updateDoc(doc(db, `bunk_locations/${selectedBunkId}/recharge_slots`, editingSlot.id), {
      startTime: editData.startTime,
      endTime: editData.endTime,
      chargerType: editData.chargerType
    });
    setEditingSlot(null);
    fetchSlots(selectedBunkId);
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>⏱️ Manage Recharge Slots</h2>

      <select
        value={selectedBunkId}
        onChange={(e) => {
          setSelectedBunkId(e.target.value);
          fetchSlots(e.target.value);
        }}
        style={selectStyle}
      >
        <option value="">Select a Bunk</option>
        {bunks.map((bunk) => (
          <option key={bunk.id} value={bunk.id}>
            {bunk.name}
          </option>
        ))}
      </select>

      {slots.length > 0 ? (
        <div style={{ marginTop: "30px", display: "grid", gap: "18px" }}>
          {slots.map((slot) => (
            <div key={slot.id} style={cardStyle}>
              <p style={slotText}>🕒 {slot.startTime} – {slot.endTime}</p>
              <p style={slotText}>🔌 {slot.chargerType}</p>
              <p style={slotText}>📦 {slot.isBooked ? "Booked" : "Available"}</p>
              <button onClick={() => handleEditOpen(slot)} style={buttonStyle}>✏️ Edit</button>
              <button onClick={() => handleDelete(slot.id)} style={{ ...buttonStyle, backgroundColor: "#ef4444" }}>🗑️ Delete</button>
            </div>
          ))}
        </div>
      ) : (
        selectedBunkId && <p style={{ marginTop: "20px", color: "#64748b" }}>No slots available.</p>
      )}

      {editingSlot && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h3>Edit Slot</h3>
            <div style={fieldStyle}>
              <label>Start Time</label>
              <input type="time" value={editData.startTime} onChange={(e) => setEditData({ ...editData, startTime: e.target.value })} style={inputStyle} />
            </div>
            <div style={fieldStyle}>
              <label>End Time</label>
              <input type="time" value={editData.endTime} onChange={(e) => setEditData({ ...editData, endTime: e.target.value })} style={inputStyle} />
            </div>
            <div style={fieldStyle}>
              <label>Charger Type</label>
              <select value={editData.chargerType} onChange={(e) => setEditData({ ...editData, chargerType: e.target.value })} style={inputStyle}>
                <option value="Type2">Type2</option>
                <option value="CCS2">CCS2</option>
                <option value="CHAdeMO">CHAdeMO</option>
              </select>
            </div>
            <button onClick={handleEditSave} style={buttonStyle}>✅ Save</button>
            <button onClick={() => setEditingSlot(null)} style={{ ...buttonStyle, backgroundColor: "#64748b", marginTop: "10px" }}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

// 🎨 Styles
const containerStyle = {
  padding: "40px",
  fontFamily: "'Segoe UI', sans-serif",
  background: "#f1f5f9",
  minHeight: "100vh"
};

const titleStyle = {
  textAlign: "center",
  color: "#1e293b",
  fontSize: "28px",
  marginBottom: "20px",
  borderBottom: "2px solid #38bdf8",
  paddingBottom: "10px"
};

const selectStyle = {
  padding: "10px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "1px solid #cbd5e1",
  marginBottom: "20px",
  width: "100%",
  maxWidth: "400px"
};

const cardStyle = {
  background: "#ffffff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
};

const slotText = {
  marginBottom: "6px",
  color: "#475569"
};

const buttonStyle = {
  padding: "6px 12px",
  marginRight: "10px",
  backgroundColor: "#0ea5e9",
  color: "#ffffff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

const modalOverlay = {
  position: "fixed",
  top: 0, left: 0, right: 0, bottom: 0,
  backgroundColor: "rgba(0,0,0,0.4)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const modalContent = {
  background: "#ffffff",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  minWidth: "400px"
};

const fieldStyle = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "16px"
};

const inputStyle = {
  padding: "10px",
  border: "1px solid #cbd5e1",
  borderRadius: "6px",
  fontSize: "16px"
};
