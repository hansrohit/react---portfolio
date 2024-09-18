import React from 'react'
import { Outlet } from 'react-router-dom'
const Weblayouts = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default Weblayouts
