import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NewCourses } from '../news/newCourses'
import { NewCourse } from '../news/newCourse'
import { Peticion } from '../../helpers/Peticion'
import { Global } from '../../helpers/Global'

export const Inicios = () => {
    const [articulo, setArticulos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        conseguirArticulos();
    }, [])

    //funcion para obtener los datos de las publicaciones.
    const conseguirArticulos = async () => {
        //Peticion para obtener los articulos
        const { datos } = await Peticion(Global.url + "articulos", "GET")
        //Si todo ha ido bien entonces guardamos el objeto
        if (datos.status === 'success') {
            setArticulos(datos.nuevoArray)
        }
        //Avisamos sobre la transacción
        setCargando(false)
    }

    return (
        <section className="section" id="section">
            <div className="jumbo">
                {cargando ? "Cargando.." :
                    articulo.length >= 2 ? <NewCourses articulos={articulo} /> :
                        <NewCourse articulos={articulo} />}
                <article className="content">
                    <h1 className="title">¿Quiénes Somos?</h1>
                    <p>Centro de Yoga RamDas especializado en Kundalini Yoga, Profesora Guru Kirn. </p>
                    <p>Nuestro centro tiene N años de apertura ofreciendo clases tanto a Adultos Mayores, Jovenes y Niños.</p>
                </article>

                <article className="content">
                    <h1 className="title">Kundalini Yoga</h1>
                    <p>Nuestra disciplina de Yoga meditativo que incluye posturas, mantras, y</p>
                </article>
            </div>

        </section>
    )
}
