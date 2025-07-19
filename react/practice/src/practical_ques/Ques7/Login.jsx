import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Navigation Hook

    const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form submission

    if (email === "user@example.com" && password === "123456") {
        setIsLoggedIn(true); // Update login state
        navigate("/"); // Redirect to Home Page
    } else {
        alert("Invalid credentials!");
    }
};


    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit}>
                <h2>Login Page</h2>
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Enter email" 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Enter password" 
                    required 
                />
                <button type="submit">LOGIN</button>
            </form>
        </div>
    );
};

const styles = {
    container: { textAlign: "center", padding: "50px" }
};

export default Login;
