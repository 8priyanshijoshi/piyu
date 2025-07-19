import React, { useState } from 'react'

function DarkLightThemeToggle () {
    const [dark,setDark] = useState(false);

    const toggleTheme = () => {
        setDark(!dark);
    };

    const appStyle = {
        backgroundColor: dark ? '#121212' : '#f5f5f5',
        color : dark ? '#f5f5f5' : '#121212',
        minHeight : '100vh',
        textAlign : 'center' ,
        padding : '50px',
        transition : 'all 0.3s ease',
    };
  return (
    <div style={appStyle}>
          <h2>{dark ? '🌙 Dark Mode' : '☀️ Light Mode'}</h2>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default DarkLightThemeToggle
