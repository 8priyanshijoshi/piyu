import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState({
        username: "",
        password: "",
    })
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const Loginadmin = (e) => {
        e.preventDefault()
        if (input.username === "admin" && input.password === "admin123") {
            localStorage.setItem("loginadmin", input.username)
            navigate("/Home")
        } else {
            alert("Invalid Username and Password")
        }
    }

    return (
        <>
            <div className='container'>
                <form className='shadow w-50 p-5 mt-5 mx-auto' onSubmit={Loginadmin}>
                    <h3 className='text-center'>Admin Login</h3>
                    <div className='row g-2'>
                        <div className="col-12">
                            <input type="text" name="username" placeholder='Username' className='form-control' value={input.username} onChange={handleChange} />
                        </div>
                        <div className="col-12">
                            <input type="password" name="password" className="form-control" placeholder='Password' value={input.password} onChange={handleChange} />
                        </div>
                        <div className="col-12">
                            <button className='btn btn-primary'>Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login