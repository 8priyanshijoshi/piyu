import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Adminpanel from './pages/Adminpanel';
import Home from './pages/Home';
import { Navigate } from 'react-router-dom';
import ProtectedRoute from './pages/ProtectedRoute';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { auth } from './firebase';
import AdminLogin from './pages/AdminLogin';

function App() {

  const [user, setUser] = useState(null);

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });
    return () => unsubscribe();
}, []);

  return (
    <Router>
        <Routes>
            {/* user site routes */}
            <Route path='/login' element={<Login />}></Route>
            <Route path='/home' element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
            <Route path='/register' element={<Register/>}></Route>

            {/* admin site routes */}
            <Route path='/adminlogin' element={<AdminLogin/>}></Route>
            <Route path='/adminpanel' element={<Adminpanel/>}></Route>
        </Routes>
    </Router>
   
  );
}

export default App;
