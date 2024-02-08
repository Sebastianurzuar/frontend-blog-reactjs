import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className="nav">
      <ul >
        <li><NavLink className="bn39" to='/'><span className="bn39span">INICIO</span></NavLink></li>
        <li><NavLink to='/articulos'><span className="bn39span">NOTICIAS</span></NavLink></li>


        <li><NavLink to='/users/login'><span className="bn39span">LOGIN</span></NavLink></li>
        <li><NavLink to='/users/register'><span className="bn39span">REGISTER</span></NavLink></li>
      </ul>
      {/* <li><NavLink to='/crear-articulo'>Crear Articulos</NavLink></li> */}

    </nav >
  )
}
