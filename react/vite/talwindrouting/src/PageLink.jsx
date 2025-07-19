import React from 'react'
import { Link } from 'react-router-dom'

const PageLink = () => {
  return (
    <>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Account">Account</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>
    </>
  )
}

export default PageLink
