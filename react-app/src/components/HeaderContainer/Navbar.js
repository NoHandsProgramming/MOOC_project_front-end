import React from 'react'
import './Navbar.css'

function Navbar(props) {
  return <nav className="navbar">
           {props.navItems.map((item) =>
             <li className="navbar-item">{item}</li>
           )}
         </nav>
}
export default Navbar
