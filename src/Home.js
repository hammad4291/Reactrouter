import React from 'react'
import "./App.css"
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Home
