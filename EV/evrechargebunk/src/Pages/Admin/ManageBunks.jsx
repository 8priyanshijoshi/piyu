// import React, { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebaseconfig";

// export default function ManageBunks() {
//   const [bunks, setBunks] = useState([]);

//   useEffect(() => {
//     const fetchBunks = async () => {
//       try {
//         const bunkCollection = collection(db, "bunk_locations");
//         const snapshot = await getDocs(bunkCollection);
//         const bunkList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setBunks(bunkList);
//       } catch (err) {
//         console.error("Error fetching bunks:", err);
//       }
//     };
//     fetchBunks();
//   }, []);

//   return (
//     <div style={{
//       padding: "40px",
//       fontFamily: "'Segoe UI', sans-serif",
//       background: "#f1f5f9",
//       minHeight: "100vh"
//     }}>
//       <h2 style={{
//         textAlign: "center",
//         color: "#1e293b",
//         marginBottom: "20px",
//         fontSize: "28px",
//         borderBottom: "2px solid #38bdf8",
//         paddingBottom: "10px"
//       }}>
//         🔌 Manage Bunks
//       </h2>

//       {bunks.length === 0 ? (
//         <p style={{ textAlign: "center", color: "#64748b" }}>No bunks found yet.</p>
//       ) : (
//         <div style={{
//           background: "#ffffff",
//           borderRadius: "12px",
//           padding: "30px",
//           boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
//         }}>
//           <table style={{
//             width: "100%",
//             borderCollapse: "collapse",
//             fontSize: "16px"
//           }}>
//             <thead>
//               <tr style={{ backgroundColor: "#e2e8f0", textAlign: "left" }}>
//                 <th style={thStyle}>Name</th>
//                 <th style={thStyle}>Address</th>
//                 <th style={thStyle}>Charger Types</th>
//                 <th style={thStyle}>Slots</th>
//               </tr>
//             </thead>
//             <tbody>
//               {bunks.map((bunk, index) => (
//                 <tr key={bunk.id} style={{
//                   backgroundColor: index % 2 === 0 ? "#f8fafc" : "#ffffff",
//                   transition: "background 0.2s ease"
//                 }}>
//                   <td style={tdStyle}>{bunk.name}</td>
//                   <td style={tdStyle}>{bunk.address}</td>
//                   <td style={tdStyle}>{bunk.chargerTypes?.join(", ")}</td>
//                   <td style={tdStyle}>{bunk.totalSlots}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// const thStyle = {
//   padding: "12px 16px",
//   color: "#334155",
//   fontWeight: "600",
//   borderBottom: "2px solid #cbd5e1"
// };

// const tdStyle = {
//   padding: "12px 16px",
//   color: "#475569",
//   borderBottom: "1px solid #e2e8f0"
// };

import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseconfig";

export default function ManageBunks() {
  const [bunks, setBunks] = useState([]);
  const [editingBunk, setEditingBunk] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    address: "",
    chargerTypes: "",
    totalSlots: ""
  });

  const fetchBunks = async () => {
    const bunkCollection = collection(db, "bunk_locations");
    const snapshot = await getDocs(bunkCollection);
    const bunkList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setBunks(bunkList);
  };

  useEffect(() => {
    fetchBunks();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this bunk?")) {
      await deleteDoc(doc(db, "bunk_locations", id));
      fetchBunks();
    }
  };

  const handleEditOpen = (bunk) => {
    setEditingBunk(bunk);
    setEditData({
      name: bunk.name,
      address: bunk.address,
      chargerTypes: bunk.chargerTypes?.join(", "),
      totalSlots: bunk.totalSlots
    });
  };

  const handleEditSave = async () => {
    await updateDoc(doc(db, "bunk_locations", editingBunk.id), {
      name: editData.name,
      address: editData.address,
      chargerTypes: editData.chargerTypes.split(",").map(s => s.trim()),
      totalSlots: parseInt(editData.totalSlots)
    });
    setEditingBunk(null);
    fetchBunks();
  };

  return (
    <div style={{ padding: "40px", fontFamily: "'Segoe UI', sans-serif", background: "#f1f5f9", minHeight: "100vh" }}>
      <h2 style={{ textAlign: "center", color: "#1e293b", marginBottom: "20px", fontSize: "28px", borderBottom: "2px solid #38bdf8", paddingBottom: "10px" }}>
        🔌 Manage Bunks
      </h2>

      {bunks.length === 0 ? (
        <p style={{ textAlign: "center", color: "#64748b" }}>No bunks found yet.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse", background: "#ffffff", borderRadius: "12px", padding: "30px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
          <thead>
            <tr style={{ backgroundColor: "#e2e8f0", textAlign: "left" }}>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Address</th>
              <th style={thStyle}>Charger Types</th>
              <th style={thStyle}>Slots</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bunks.map((bunk, index) => (
              <tr key={bunk.id} style={{ backgroundColor: index % 2 === 0 ? "#f8fafc" : "#ffffff" }}>
                <td style={tdStyle}>{bunk.name}</td>
                <td style={tdStyle}>{bunk.address}</td>
                <td style={tdStyle}>{bunk.chargerTypes?.join(", ")}</td>
                <td style={tdStyle}>{bunk.totalSlots}</td>
                <td style={tdStyle}>
                  <button onClick={() => handleEditOpen(bunk)} style={buttonStyle}>✏️ Edit</button>
                  <button onClick={() => handleDelete(bunk.id)} style={{ ...buttonStyle, backgroundColor: "#ef4444" }}>🗑️ Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Edit Modal */}
      {editingBunk && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h3 style={{ marginBottom: "16px", color: "#0f172a" }}>Edit Bunk</h3>
            <div style={fieldStyle}>
              <label>Name</label>
              <input type="text" name="name" value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} style={inputStyle} />
            </div>
            <div style={fieldStyle}>
              <label>Address</label>
              <input type="text" name="address" value={editData.address} onChange={(e) => setEditData({ ...editData, address: e.target.value })} style={inputStyle} />
            </div>
            <div style={fieldStyle}>
              <label>Charger Types</label>
              <input type="text" name="chargerTypes" value={editData.chargerTypes} onChange={(e) => setEditData({ ...editData, chargerTypes: e.target.value })} style={inputStyle} />
            </div>
            <div style={fieldStyle}>
              <label>Total Slots</label>
              <input type="number" name="totalSlots" value={editData.totalSlots} onChange={(e) => setEditData({ ...editData, totalSlots: e.target.value })} style={inputStyle} />
            </div>
            <button onClick={handleEditSave} style={buttonStyle}>✅ Save</button>
            <button onClick={() => setEditingBunk(null)} style={{ ...buttonStyle, backgroundColor: "#64748b", marginTop: "10px" }}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

const thStyle = {
  padding: "12px 16px",
  color: "#334155",
  fontWeight: "600",
  borderBottom: "2px solid #cbd5e1"
};

const tdStyle = {
  padding: "12px 16px",
  color: "#475569",
  borderBottom: "1px solid #e2e8f0"
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
