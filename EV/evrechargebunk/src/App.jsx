import './App.css'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Register from './Pages/Auth/Register'
import Login from './Pages/Auth/Login'
import HomePage from './HomePage'
import ProtectedRoute from './component/ProtectedRoute'
import AdminDashboard from './Pages/Admin/AdminDashboard'
import ClientHome from './Pages/Client/ClientHome'
import AddBunk from './Pages/Admin/AddBunk'
import ManageBunks from './Pages/Admin/ManageBunks'
import AddSlot from './Pages/Admin/AddSlot'
import NearbyBunks from './Pages/Client/NearbyBunks'
import ManageSlots from './Pages/Admin/ManageSlots'
import BookSlot from './Pages/Client/BookSlot'
import BunkDetails from './Pages/Client/BunkDetails'
import ClientBookings from './Pages/Client/ClientBookings'

function App() {
 
  return (
    <BrowserRouter>
        <Routes>
            {/* Auth */}
            <Route path="/" element={<HomePage/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin-register" element={<Register defaultRole="admin" />} />
            <Route path="/client-register" element={<Register defaultRole="client" />} />
            <Route path="/login" element={<Login />} />
            {/* Example dashboards */}
            <Route path="/admin-dashboard" element={ <ProtectedRoute><AdminDashboard /></ProtectedRoute> }/>
            <Route path="/admin-addbunk" element={<ProtectedRoute><AddBunk /></ProtectedRoute>} />
            <Route path='/admin/manage-bunks' element={<ProtectedRoute><ManageBunks/></ProtectedRoute>} />
            <Route path='/admin/slots' element={<ProtectedRoute><AddSlot/></ProtectedRoute>} />
            <Route path="/admin/manage-slots" element={<ManageSlots />} />
            {/*client */}
            <Route path="/client-dashboard" element={<ProtectedRoute><ClientHome /></ProtectedRoute>} />
            <Route path='/nearbybunks' element={<NearbyBunks/>} />
            <Route path="/bunk/:bunkId" element={<BunkDetails />} />
            <Route path="/book/:bunkId/:slotId" element={<BookSlot />} />
            <Route path="/my-bookings" element={<ClientBookings />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
