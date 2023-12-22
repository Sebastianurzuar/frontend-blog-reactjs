import React from 'react'
import { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'
import { Listado } from './Listado'


export const Articulos = () => {

	const [articulo, setArticulos] = useState([])
	const [cargando, setCargando] = useState(true)

	useEffect(() => {
		conseguirArticulos();
	}, [])

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
		<>
			{cargando ? "Cargando.." :
				articulo.length >= 1 ? <Listado articulos={articulo} setArticulos={setArticulos} /> : <h1>No hay artículos</h1>
			}
		</>
	)
}

