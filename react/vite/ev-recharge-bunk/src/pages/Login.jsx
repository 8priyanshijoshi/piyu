import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/home"); // Ensure the "/home" route is correctly set up in App.js
        } catch (e) {
            alert("Invalid email or password. Please try again.");
            console.error(e);
        }
    };
    
  return (
    <div>
        <form action="">
        <h2>Login Page</h2>
        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}  />
        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
         <p>New User? <Link to="/register">Register Now</Link></p>
        </form>
    </div>
  )
}

export default Login
