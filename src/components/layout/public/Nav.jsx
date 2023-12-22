import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="container-lists__list-end">
        <li><NavLink to='/'>Inicio</NavLink></li>
        <li><NavLink to='/articulos'>Articulos</NavLink></li>

        <li className="list-end__item">
          <NavLink to='/users/login'>Login
            <i className='fa-solid fa-user'></i>
          </NavLink>

        </li>
        <li className="list-end__item">
          <NavLink to='/users/register'>Register
            <i className='fa-solid fa-users'></i>
          </NavLink>
        </li>
      </ul>
      {/* <li><NavLink to='/crear-articulo'>Crear Articulos</NavLink></li> */}

    </nav >
  )
}
