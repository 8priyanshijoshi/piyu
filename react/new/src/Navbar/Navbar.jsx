import React from 'react'
import './Navbar.css'
import Logo from './Logo'
import Nav from './Nav'
import Form from './Form'

const Navbar = () => {
  return (
    <>
        <header>
            <div className="container">
                <div className="navbar">
                   <Logo/>
                    <Nav/>
                    <Form/>
                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar
