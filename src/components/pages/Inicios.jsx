import React from 'react'
import { Link } from 'react-router-dom'

export const Inicios = () => {
    return (
        <section className="section" id="section">
            <div className="jumbo">
                <article className="content">
                    <h1 className="title">¿Quiénes Somos?</h1>
                    <p>Centro de Yoga RamDas especializado en Kundalini Yoga, Profesora Guru Kirn. </p>
                    <p>Nuestro centro tiene N años de apertura ofreciendo clases tanto a Adultos Mayores, Jovenes y Niños.</p>
                </article>

                <article className="articulo2">
                    <h1 className="title">Kundalini Yoga</h1>
                    <p>Nuestra disciplina de Yoga meditativo que incluye posturas, mantras, y</p>
                </article>

                {/* ~ Boton para crear articulos ~ */}
                {/* <Link to='/articulos' classNameName='button'>Ver los artículos</Link> */}
            </div>
        </section>
    )
}
