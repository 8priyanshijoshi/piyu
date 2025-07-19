import React from 'react'
import { useNavigate } from 'react-router-dom'
import List from './List'

const Navigation = () => {
    const menu = [
        { pathname: "Home", path: "/Home" },
        { pathname: "Product", path: "/Product" }
    ]

    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("loginadmin")
        navigate("/")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#55dd99" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <h3>Dashboard</h3>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#homepage" aria-controls="homepage" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end gap-5" id="homepage">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <List menus={menu} />
                        </ul>
                        <div className='d-flex gap-2 align-items-center'>
                            <h5 className='m-0'>Welcome Admin</h5>
                            <button className='btn btn-light' onClick={logout}>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation