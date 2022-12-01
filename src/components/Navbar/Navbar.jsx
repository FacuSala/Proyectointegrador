import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import icon from './icon.png'


export default function Menu() {
  return (
    <header className='cabecera'>
        <div className='cajaLogo'>
          <img src={icon} alt="logo" />
        </div>
        <div className='cajaLink'>
          <NavLink to="/home">Home</NavLink>
        </div>
        <div className='cajaLink'>
          <NavLink to="/personajes">Personajes</NavLink>
        </div>
        <div className='cajaLink'>
          <NavLink to="Donde">¿Dónde jugar?</NavLink>
        </div>
    </header>
  )
}
