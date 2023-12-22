import React from 'react'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'




export const Listado = ({ articulos, setArticulos }) => {

	const { auth } = useAuth()

	//FUNCION PARA BOTON ELIMINAR
	const eliminar = async (id) => {
		//Conseguir datos
		let { datos } = await Peticion(Global.url + "articulo/" + id, "DELETE")
		let peticion = await Peticion(Global.url + "publication/" + id, "DELETE")
		//Comprobar si todo ha salido bien
		if (datos.status == "succes") {
			//Se crea un nuevo array con todo articulo cuyo id no coincida con el solicitado
			let nuevoArray = articulos.filter(articulo => articulo._id !== id)
			//Se setea el array de artículos con el actualizado
			setArticulos(nuevoArray)
		}
	}



	return (
		articulos.map(articulos => {
			return (
				<article key={articulos._id} className="articulo-item">
					<div className="mascara">
						{articulos.imagen == "default.png" && <img src="https://i.ytimg.com/vi/e7FIjEhDtME/maxresdefault.jpg" alt="image-por-defecto" />}
						{articulos.imagen != "default.png" && <img src={Global.url + "imagen/" + articulos.imagen} alt="image-por-defecto" />}
					</div>
					<div className="datos">
						<a href='#'>{articulos.autor}</a>
						<h3 className="title"><Link to={"/articulo/" + articulos._id}>{articulos.titulo}</Link></h3>
						<p className="description">{articulos.contenido}</p>
						<p className="description">{articulos._id}</p>

						<p>Aqui deberian estar los comentarios: {articulos.comentarios}</p>

						{auth.rol && auth.rol == "role_admin" ?
							<div>
								<Link to={'/account/editar/' + articulos._id} className="edit">Editar</Link>
								<button className="delete" onClick={() => { eliminar(articulos._id) }} >Borrar</button>
							</div> : ""}
					</div>
				</article>
			)
		})
	)
}

