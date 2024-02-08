import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { conseguirArticulos } from '../../services/getArticles'
import { NewEvent } from '../news/newEvent'
import { Peticion } from '../../helpers/Peticion'
import { Global } from '../../helpers/Global'

export const Izq = () => {

    const [buscar, setBuscar] = useState('')
    const [articulo, setArticulos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [message, setMessage] = useState('')
    const navegar = useNavigate()
    const { auth } = useAuth()


    useEffect(() => {
        getEvents()
    }, [])

    const getEvents = async () => {
        const { datos } = await Peticion(Global.url + 'articulos-evento')
        if (datos.status === 'error') {
            setMessage(datos.message)
        }
        if (datos.status === 'success') {
            setArticulos(datos.articulos)
        }
    }

    const hacerBusqueda = (e) => {
        e.preventDefault()
        let miBusqueda = e.target.search_field.value
        navegar("/buscar/" + miBusqueda, { replace: true })

    }

    return (
        <aside id="bar" className="bar-left">

            {auth.rol == 'role_admin' &&
                <div className="search post">
                    <h3 className="title">Crear Post</h3>
                    <a href="/crear/articulo">
                        <input type='submit' value='Crear' /> </a>
                </div>
            }

            <div className="search buscador">
                <h3 className="title">Buscador</h3>
                <form onSubmit={hacerBusqueda}>
                    <input type="text" name="search_field" />
                    <input type='submit' value='Buscar' id="search" />
                </form>
            </div>

        </aside >

    )
}
