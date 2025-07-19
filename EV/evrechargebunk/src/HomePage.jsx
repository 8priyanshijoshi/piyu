import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <style>
        {`
          .bgstyle {
            background-image: url("src/assets/Images/Copilot_20250623_182946.png");
            background-size: cover;
            background-position: center;
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            z-index: -1;
          }

          .ev-button {
            background-color: #28a745;
            color: white;
            padding: 12px 24px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .ev-button:hover {
            background-color: #218838;
            transform: scale(1.05);
          }

          h1 {
            color: white;
            transition: color 0.3s ease;
          }

          h1:hover {
            color: #bdf25e;
          }
        `}
      </style>

      <div className="bgstyle" />
        <h1>Welcome To Electric Green</h1>
        <button className="ev-button" onClick={() => navigate('/login')}>
          LOGIN HERE
        </button>
    </>
  );
};

export default HomePage;
