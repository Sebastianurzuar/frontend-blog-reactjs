import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

export const Sidebar = () => {

    const [buscar, setBuscar] = useState('')
    const navegar = useNavigate()
    const { auth } = useAuth()




    const hacerBusqueda = (e) => {
        e.preventDefault()
        let miBusqueda = e.target.search_field.value
        navegar("/buscar/" + miBusqueda, { replace: true })

    }

    return (
        <aside className="lateral">
            {auth.rol == 'role_admin' &&
                <div className="search">
                    <h3 className="title">Crear Post</h3>
                    <a href="/crear/articulo">
                        <input type='submit' value='asdsad' /> </a>

                </div>
            }

            <div className="search">
                <h3 className="title">Buscador</h3>
                <form onSubmit={hacerBusqueda}>
                    <input type="text" name="search_field" />
                    <input type='submit' value='Buscar' id="search" />
                </form>
            </div>
        </aside >

    )
}
