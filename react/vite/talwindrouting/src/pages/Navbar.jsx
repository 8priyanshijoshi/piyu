//router 
//npm install react-router-dom

import React from 'react'
import { Link } from 'react-router-dom'
import PageLink from '../PageLink'

const Navbar = () => {
  return (
    <>
        <div className="container mx-auto">
            <div classname="navbar flex justify-between items-center">
                <div classname="logo">
                    LOGO
                </div>
                <nav>
                    <PageLink/>
                </nav>
            </div>
        </div>
    </>
  )
}

export default Navbar
