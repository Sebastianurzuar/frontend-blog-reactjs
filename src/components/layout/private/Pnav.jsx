import React from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../../../../public/images/img/user.png'
import { Global } from '../../../helpers/Global'
import useAuth from '../../../hooks/useAuth'

export const Pnav = () => {

    const { auth, setAuth } = useAuth()
    return (
        <nav className="nav">
            <ul className="container-lists__list-end">


                <li><NavLink to='/'>Inicio</NavLink></li>


                <li><NavLink to='/articulos'>Articulos</NavLink></li>


                <li className="list-end__item">
                    <NavLink to={"/account/profile/" + auth._id} className="list-end__link-image">

                        {auth.image != "default.png" && <img width='45px' height='30px' src={Global.url + 'user/avatar/' + auth.image} className="list-end__img" alt="Imagen de perfil" />}
                        {auth.image == "default.png" && <img width='45px' height='30px' src={avatar} className="list-end__img" alt="Imagen de perfil" />}

                    </NavLink>
                </li>


                <li className="list-end__item">
                    <NavLink to={"/account/profile/" + auth._id} className="list-end__link">
                        <span className="list-end__name">{auth.nick}</span>
                    </NavLink>
                </li>


                <li className="list-end__item">
                    <NavLink to="/account/ajustes">
                        <span className="list-end__name">Ajustes</span>
                    </NavLink>
                </li>


                <li className="list-end__item">
                    <NavLink to='/account/logout'>Cerrar sesión</NavLink>
                </li>
            </ul>
            {/* <li><NavLink to='/crear-articulo'>Crear Articulos</NavLink></li> */}

        </nav >
    )
}
