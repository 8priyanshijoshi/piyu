import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebase';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();


    const handleRegister = async () => {
        if(password !== confirmPassword){
            alert("passwords do not match!");
            return;
        }
       try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccessMessage("Registration Successful! Redirecting to login...");
            
            // Redirect after 2 seconds
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (error) {
            console.error("Error during registration:", error);
            alert("Error: " + error.message);
        }
    };
    

  return (
    <div>
        <form onSubmit={handleRegister} action="">
            <h2>Register Page</h2>
           { successMessage && <p style={{ color: "green" }}>{successMessage}</p>} {/* Show success message */}
            <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
            <input type="password" placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} required />
            <button type='submit'>Register</button>
            <p>Already Registered? <Link to="/login">Login</Link></p>
        </form>
    </div>
  )
}

export default Register
