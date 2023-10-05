import React from 'react'
import { Link } from 'react-router-dom'

export const Inicios = () => {
    return (
        <div className="jumbo">
            <h1>Bienvenido al blog de Sebaur con React!</h1>
            <p>Blog desarrolado con el MERN Stack (Mongo, Express, React y Nodejs)</p>
            <Link to='/articulos' className='button'>Ver los artículos</Link>
        </div>
    )
}
