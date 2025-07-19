import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth,db } from '../../firebaseconfig';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCred.user;

      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        name: name,
        role: role.trim()
      });

      alert('Registered successfully!');
      navigate('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (  

<>
<style>
  {`

  html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

    .bgstyle {
      background-image: url("src/assets/Images/bg-image.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: -1;
    }

    .content-wrapper {
      position: relative;
      z-index: 1;
      height: 100vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    h2 {
      color: white;
      margin-bottom: 20px;
    }

    .form-box {
      width: 350px;
      min-height: 250px;
      padding: 40px;
      border-radius: 12px;
      background-color: rgba(12, 92, 91, 0.6);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
      text-align: center;
      box-sizing: border-box;
      margin-right: 1000px;
    }

    input, select {
      margin: 10px 0;
      padding: 10px;
      width: 250px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }

    button {
      padding: 10px 20px;
      margin-top: 10px;
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
    }

    button:hover {
      background-color: #218838;
      transform: scale(1.05);
    }

    span {
      color: #00f;
      cursor: pointer;
      text-decoration: underline;
    }

    span:hover {
      color: #0077ff;
    }
  `}

</style>

    <div className='bgstyle'> </div>
      <div className='content-wrapper'> 
        <div className='form-box'>
          <h2>Register as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>
          <input placeholder="Full Name" onChange={(e) => setName(e.target.value)} /><br />
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="client">Client</option>
              <option value="admin">Admin</option>
            </select><br /><br />
            <button onClick={handleRegister}>Register</button>
          </div>
      </div>
    </>
  );
};

export default Register;

