import React, { useEffect, useState } from 'react'
import { NewEvent } from '../news/newEvent'
import { NewCourse } from '../news/newCourse'
import { peticionPrueba } from '../../services/getBestArticles'
import { NewThreeCourses } from '../news/newThreeCourses'
import { conseguirArtReciente } from '../../services/getFirstArt'


export const Sidebar = () => {

    const [articulo, setArticulo] = useState([])
    const [articulos, setArticulos] = useState({})
    const [cargando, setCargando] = useState(true)
    const [cargandop, setCargandop] = useState(true)




    useEffect(() => {
        conseguirArtReciente().then(res => {
            setArticulo(res.datos)
            setCargando(res.cargando)
        })
        peticionPrueba().then(res => {
            setArticulos(res.data)
            setCargandop(res.cargandop)
        })

    }, [])



    // const getEvents = async () => {
    //     const { datos } = await Peticion(Global.url + 'articulos-evento')
    //     if (datos.status === 'error') {
    //         setMessage(datos.message)
    //     }
    //     if (datos.status === 'success') {
    //         setArticulos(datos.articulos)
    //     }
    // }


    return (
        <aside id="bar" className="bar-right">
            {cargando ? "Cargando.." :
                articulo && <NewCourse articulos={articulo} />}
            {cargandop ? "Cargando.." :
                articulos && articulos[0].comentarios >= 5 && <NewThreeCourses articulos={articulos} />}
            {/* SECCION EVENTO CON FECHA */}
            {/* aqui deberia preguntar si es que el array de articulos tiene datos entonces renderizo y si no entonces renderizo respuesta negativa */}
            {/* {articulo.length >= 1 && <NewEvent articulos={articulo} setArticuldos={setArticulos} />
            } */}
        </aside >

    )
}
