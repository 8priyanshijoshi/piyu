import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const logout=()=>{
    localStorage.removeItem("loginuser")
    navigate("/")
  }
  return (
    <>
      <h1>Welcome To Homepage</h1>

      <button onClick={logout}>logout</button>
    </>
  )
}

export default Home
