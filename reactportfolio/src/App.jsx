import React from 'react'
import Navbar from "./components/Navbar"
import { Route,Routes } from 'react-router-dom'
import Project from './pages/Project'
import Home from './pages/Home'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
      <Navbar />
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
