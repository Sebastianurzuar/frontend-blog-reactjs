import React from 'react'
import { useState, useEffect } from 'react'
import { Listado } from './Listado'
import { conseguirArticulos } from '../../services/getArticles'


export const Articulos = () => {

	const [articulo, setArticulos] = useState([])
	const [cargando, setCargando] = useState(true)
	const [message, setMessage] = useState('')


	useEffect(() => {
		conseguirArticulos().then(res => {
			const { datos, cargando, message } = res
			setArticulos(datos)
			setCargando(cargando)
			setMessage(message)
		})

	}, [])




	return (
		<>
			{message}
			{cargando ? "Cargando.." :
				articulo && articulo.length >= 1 ? <Listado articulos={articulo} setArticulos={setArticulos} /> : <h1>No hay artículos</h1>
			}
		</>
	)
}

