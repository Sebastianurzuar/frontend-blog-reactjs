import React from 'react'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { eliminar } from '../../services/deleteArticle'




export const Listado = ({ articulos, setArticulos }) => {

	const { auth } = useAuth()

	const handleClick = (id) => {
		eliminar(id, articulos).then(res => {
			setArticulos(res)
		})
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
								<button className="delete" onClick={() => { handleClick(articulos._id) }} >Borrar</button>
							</div> : ""}
					</div>
				</article>
			)
		})
	)
}

