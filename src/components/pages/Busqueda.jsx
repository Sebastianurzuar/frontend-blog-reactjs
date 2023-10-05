import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'
import { Listado } from './Listado'

export const Busqueda = () => {

    const [articulo, setArticulos] = useState([])
    const [cargando, setCargando] = useState(true)
    const params = useParams()

    useEffect(() => {
        conseguirArticulos();
    }, [])

    useEffect(() => {

        conseguirArticulos();

    }, [params])

    const conseguirArticulos = async () => {

        const { datos, cargando } = await Peticion(Global.url + "buscar/" + params.busqueda, "GET")


        if (datos.status === 'succes') {
            setArticulos(datos.articulos)
        } else {
            setArticulos([])
        }

        setCargando(false)





    }

    return (
        <>
            {cargando ? "Cargando.." :

                articulo.length >= 1 ? <Listado articulos={articulo} setArticulos={setArticulos} /> : <h1>No hay artículos</h1>
            }
        </>
    )
}
