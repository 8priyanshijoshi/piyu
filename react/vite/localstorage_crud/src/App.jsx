import { useState } from 'react'
import Products from './Pages/Products'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Showproduct from './Pages/Showproduct'
import ProtectedRoutes from './Components/service/ProtectedRoutes'

function App() {

  return (
    <>
     <Router>
        <Routes>
          <Route element={<Login />} path='/'></Route>
          <Route element={<ProtectedRoutes />} path='/Home'>
            <Route element={<Home />} path='/Home'></Route>
          </Route>
          <Route element={<ProtectedRoutes />} path='/Product'>
            <Route element={<Products />} path='/Product'></Route>
          </Route>
          <Route element={<ProtectedRoutes />} path='/Showproduct'>
            <Route element={<Showproduct />} path='/Showproduct'></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
