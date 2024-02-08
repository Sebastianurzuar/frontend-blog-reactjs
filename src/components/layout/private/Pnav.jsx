import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import avatar from '../../../../public/images/img/user.png'
import { Global } from '../../../helpers/Global'
import useAuth from '../../../hooks/useAuth'

export const Pnav = () => {

    const { auth } = useAuth()
    const cadena = auth.nick.toUpperCase()

    return (
        <nav className="nav">
            <ul className="container-lists__list-end">

                <li><NavLink to='/'><span className="bn39span">INICIO</span></NavLink></li>
                <li><NavLink to='/articulos'><span className="bn39span">NOTICIAS</span></NavLink></li>
                <li><NavLink to={"/account/profile/" + auth._id} className="list-end__link-image">
                    {auth.image != "default.png" && <span className="bn39span"><img width='45px' height='30px' src={Global.url + 'user/avatar/' + auth.image} className="list-end__img" alt="Imagen de perfil" /></span>}
                    {auth.image == "default.png" && <span className="bn39span"><img width='45px' height='30px' src={avatar} className="list-end__img" alt="Imagen de perfil" /></span>}
                </NavLink>
                </li>


                <li className="list-end__item">
                    <NavLink to={"/account/profile/" + auth._id} className="list-end__link">
                        <span className="bn39span">#{cadena}</span>
                    </NavLink>
                </li>


                <li className="list-end__item">
                    <NavLink to="/account/ajustes">

                        <span className="bn39span">AJUSTES</span>
                    </NavLink>
                </li>


                <li className="list-end__item">
                    <a href='/account/logout'><span className="bn39span">CERRAR SESIÓN</span>
                    </a>
                </li>
            </ul>
            {/* <li><NavLink to='/crear-articulo'>Crear Articulos</NavLink></li> */}

        </nav >
    )
}
