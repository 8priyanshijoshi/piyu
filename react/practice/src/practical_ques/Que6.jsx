// Implement routing using react-router-dom

import React from 'react'
import { Link } from 'react-router-dom'

const Que6 = () => {
  return (
    <>
        <nav style={styles.nav}>
            <ul style= {styles.ul}>
                <li ><Link to="/" style= {styles.li}>Home </Link></li> 
                <li ><Link to="/features" style= {styles.li}>Features</Link></li>   
                <li ><Link to="/about" style= {styles.li}>About</Link></li>  
                <li ><Link to="/contact" style= {styles.li}>Contact</Link></li>
            </ul>    
        </nav>   
    </>
  )
}

const styles = {
    nav:{background: "#333", padding:"10px"},
    ul:{display:"flex", listStyle:"none", justifyContent:"center", gap:"20px" },
    li:{display:"block", color:"white", cursor:"pointer"}
}

export default Que6
