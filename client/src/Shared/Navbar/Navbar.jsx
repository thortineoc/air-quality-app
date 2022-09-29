import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  return (
    <nav className='Navbar'>
          <ul>
            <li>
              <NavLink to="/" className='Link'>Informacje</NavLink>
            </li>
            <li>
              <NavLink to="/map" className='Link'>Mapa</NavLink>
            </li>
            <li>
              <NavLink to="/plots" className='Link'>Wykresy</NavLink>
            </li>
            <li>
              <NavLink to="/stats" className='Link'>Statystyki</NavLink>
            </li>
          </ul>
        </nav>
  )
}

export default Navbar