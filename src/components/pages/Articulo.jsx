import React from 'react'
import { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'
import { Listado } from './Listado'
import { useNavigate, useParams } from 'react-router-dom'
import avatar from '../../../public/images/img/user.png'
import useAuth from '../../hooks/useAuth'
import { UseForm } from '../../hooks/useForm'


export const Articulo = () => {

	const [articulo, setArticulos] = useState({})
	const [publications, setPublications] = useState([])
	const [contador, setContador] = useState()
	const [cargando, setCargando] = useState(true)
	const params = useParams()
	const { auth } = useAuth()
	const { formulario, cambiado } = UseForm()
	const navigate = useNavigate()

	useEffect(() => {
		conseguirArticulo();
		conseguirComentarios()
	}, [])

	const conseguirArticulo = async () => {

		const { datos } = await Peticion(Global.url + "articulo/" + params.id, "GET")

		if (datos.status === 'success') { setArticulos(datos.miArticulo) }

		setCargando(false)
	}

	const conseguirComentarios = async () => {
		const { datos } = await Peticion(Global.url + 'publication/' + params.id, "GET")
		if (datos.status == 'success') {
			setContador(datos.contador)
			setPublications(datos.consulta)
		}


	}

	const comentar = async (e) => {
		e.preventDefault()
		let datos = formulario

		const peticion = await fetch(Global.url + 'publication/' + params.id, {
			method: 'POST',
			body: JSON.stringify(datos),
			headers: {
				"Content-Type": "application/json",
				"Authorization": localStorage.getItem('token')
			}
		})

		const response = await peticion.json()
		setPublications([...publications, response.newPublication])

	}

	return (
		<div className='jumbo'>
			{cargando ? "Cargando.." :
				<>

					{/* ~~AQUI VA EL ARTICULO~~ */}
					<div className="mascara">
						{articulo.imagen == "default.png" && <img src="https://i.ytimg.com/vi/e7FIjEhDtME/maxresdefault.jpg" alt="image-por-defecto" />}
						{articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.image} alt="image-por-defecto" />}
					</div>
					<h1>{articulo.titulo}</h1>
					<p>{articulo.contenido}</p>
					<span>{articulo.fecha}</span>


					{/* ~~SECCION COMENTARIOS~~ */}
					<h3>Comentarios</h3>

					{publications.length >= 1 ?
						publications.map(publicacion => {
							return (
								<article key={publicacion._id}>

									<img width='45px' height='30px' src={Global.url + 'user/avatar-id/' + publicacion.user} className="list-end__img" alt="Imagen del perfil" />


									<p>Autor: {publicacion.author}</p>
									<p>{publicacion.text}</p>
									<p>ID de usuario: {publicacion.user}</p>
									<p>fecha de creación: {publicacion.fecha}</p>

								</article>
							)
						})
						:
						<p>No hay comentarios.</p>}

					{/* ~~AQUI SE DEJAN LOS COMENTARIOS~~ */}
					<form onSubmit={auth._id ? comentar :
						e => {
							alert('Inicia sesión para comentar.')
							navigate('/users/register')
						}
					}>
						<label htmlFor="text"></label>
						{auth._id ?
							<textarea name="text" placeholder={"Comentar como" + ' ' + auth.nick} required onChange={cambiado} />
							:
							<textarea name="text" placeholder='Deja tu comentario.' required />
						}
						<input type='submit' value='Comentar' />
					</form>




				</>
			}
		</div>


	)

}
