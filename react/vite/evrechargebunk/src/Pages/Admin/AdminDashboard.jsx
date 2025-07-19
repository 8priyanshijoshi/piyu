import React from "react";
import { Link } from "react-router-dom";
import DashboardStats from "../../component/Admin/DashboardStats";

export default function AdminDashboard() {
  const {
    totalBunks,
    availableSlots,
    todaysBookings,
    todaysRevenue
  } = DashboardStats();
  return (
    <>
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            width: 100vw;
            height: 100vh;
            overflow-x: hidden;
            font-family: 'Segoe UI', sans-serif;
            background: #f1f5f9;
          }

          * {
            box-sizing: border-box;
          }

          .admin-container {
            display: flex;
            width: 100vw;
            height: 100vh;
            overflow-x: hidden;
            overflow-y: auto;
          }

          .sidebar {
            width: 240px;
            background: #1e293b;
            color: white;
            padding: 30px 20px;
            display: flex;
            flex-direction: column;
            position: sticky;
            top: 0;
            height: 100vh;
          }

          .sidebar h2 {
            font-size: 22px;
            margin-bottom: 40px;
            color: #38bdf8;
          }

          .sidebar a {
            color: #e2e8f0;
            text-decoration: none;
            margin: 12px 0;
            padding: 10px;
            border-radius: 6px;
            transition: background 0.3s ease;
            font-weight: 500;
          }

          .sidebar a:hover {
            background-color: #334155;
            color: #38bdf8;
          }

          .main-content {
            flex: 1;
            padding: 40px;
            max-width: 100%;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          .main-content::-webkit-scrollbar {
            display: none;
          }

          .dashboard-header {
            font-size: 30px;
            font-weight: bold;
            color: #1e293b;
            margin-bottom: 30px;
          }

          .dashboard-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 28px;
            margin-top: 20px;
          }

          .card {
            background: white;
            padding: 24px;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
            transition: transform 0.2s ease;
          }

          .card:hover {
            transform: translateY(-5px);
          }

          .card span {
            font-size: 14px;
            color: #64748b;
          }

          .card h3 {
            font-size: 26px;
            color: #0f172a;
            margin-top: 8px;
          }

          @media (min-width: 1280px) {
            .main-content {
              padding: 40px 80px;
            }
          }

          @media (max-width: 768px) {
            .admin-container {
              flex-direction: column;
            }

            .sidebar {
              width: 100%;
              flex-direction: row;
              flex-wrap: wrap;
              justify-content: space-around;
              height: auto;
              padding: 20px;
            }

            .sidebar a {
              margin: 10px;
            }

            .main-content {
              padding: 20px;
            }

            .dashboard-header {
              font-size: 26px;
              text-align: center;
              margin-bottom: 20px;
            }

            .dashboard-cards {
              gap: 20px;
            }
          }
        `}
      </style>
    <>
      {/* Same styles as before — can refactor to CSS module later */}
      <div className="admin-container">
        <aside className="sidebar">
          <h2>⚡ EV Admin</h2>
          <Link to="/admin-dashboard">🏠 Admin Dashboard</Link>
          <Link to="/admin-addbunk">➕ Add Bunk</Link>
          <Link to="/admin/manage-bunks">🛠️ Manage Bunks</Link>
          <Link to="/admin/slots">⏱️ Recharge Slots</Link>
          <Link to="/admin/manage-slots">⏱️ Manage Recharge Slots</Link>
          <Link to="/">🚪 Logout</Link>
        </aside>

        <main className="main-content">
          <div className="dashboard-header">Welcome Admin 👋</div>
          <div className="dashboard-cards">
            <div className="card">
              <span>Total Bunks</span>
              <h3>{totalBunks}</h3>
            </div>
            <div className="card">
              <span>Available Slots</span>
              <h3>{availableSlots}</h3>
            </div>
            <div className="card">
              <span>Today's Bookings</span>
              <h3>{todaysBookings}</h3>
            </div>
            <div className="card">
              <span>Revenue Today</span>
              <h3>₹{todaysRevenue}</h3>
            </div>
          </div>
        </main>
      </div>
    </>
    </>
  );
}
