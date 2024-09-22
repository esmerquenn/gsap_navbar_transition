import React from 'react'
import Nav from './Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import './App.css'
function App() {
  return (
    <div className=' bg-white'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/work' element={<About/>}/>
        <Route path='/projects' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
