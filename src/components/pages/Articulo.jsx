import React from 'react'
import { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'
import { Listado } from './Listado'
import { useParams } from 'react-router-dom'

export const Articulo = () => {

	const [articulo, setArticulos] = useState({})
	const [cargando, setCargando] = useState(true)
	const params = useParams()

	useEffect(() => {
		conseguirArticulo();
	}, [])

	const conseguirArticulo = async () => {
		const { datos } = await Peticion(Global.url + "articulo/" + params.id, "GET")
		console.log(datos)
		if (datos.status === 'success') { setArticulos(datos.miArticulo) }
		console.log(articulo)

		setCargando(false)
	}

	return (
		<div className='jumbo'>
			{cargando ? "Cargando.." :
				<>
					<div className="mascara">
						{articulo.imagen == "default.png" && <img src="https://i.ytimg.com/vi/e7FIjEhDtME/maxresdefault.jpg" alt="image-por-defecto" />}
						{articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen} alt="image-por-defecto" />}
					</div>
					<h1>{articulo.titulo}</h1>
					<p>{articulo.contenido}</p>
					<span>{articulo.fecha}</span>
				</>
			}
		</div>
	)
}
