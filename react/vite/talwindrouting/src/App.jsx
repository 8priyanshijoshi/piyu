import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Account from './pages/Account'
import About from './pages/About'
import Contact from './pages/Contact'
import Counter from './Hooks_Example/UseState/Counter'
import UserInput from './Hooks_Example/UserInput'
import UserInput2 from './Hooks_Example/UserInput2'
import Employee from './Hooks_Example/UseState/Employee'
import FetchApi from './Hooks_Example/UseEffect/FetchApi'
import DigitalClock from './Hooks_Example/UseEffect/DigitalClock'
import RefEx from './Hooks_Example/UseRef/RefEx'
import VideoRef from './Hooks_Example/UseRef/VideoRef'
import ContextEx from './Hooks_Example/UseContext/ContextEx'
import ContextEx2 from './Hooks_Example/UseContext/ContextEx2'
import ThemeContext from './Hooks_Example/UseContext/ThemeContext'
import ReducerEx1 from './Hooks_Example/UseReducer/ReducerEx1'

function App() {
  return (
    <>
     {/* <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element="" />
        <Route path='/Account' element={<Account/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
     </Router> */}
    {/* <Counter/> */}
    {/* <UserInput/> */}
    {/* <UserInput2/> */}
    {/* <Employee/> */}
    {/* <FetchApi/> */}
    {/* <DigitalClock/> */}
      {/* <RefEx/>
      <VideoRef/> */}
      {/* <ContextEx/>
      <ContextEx2/> */}
      <ThemeContext/>
      <ReducerEx1/>
    </>
  )
}

export default App
