import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
            <nav>
        <ul>
            <li>
            <NavLink to={"/"} className='aaa'>Home</NavLink>
            </li>
            <li>
            <NavLink to={"/Contact"} className='aaa'>Contact</NavLink>
            </li>
            <li>
            <NavLink to={"/About"} className='aaa'>About</NavLink>
            </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
