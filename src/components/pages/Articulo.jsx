import React from 'react'
import { useState, useEffect } from 'react'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'
import { Listado } from './Listado'
import { useNavigate, useParams } from 'react-router-dom'
import avatar from '../../../public/images/img/user.png'
import useAuth from '../../hooks/useAuth'
import { UseForm } from '../../hooks/useForm'
import { conseguirArticulo } from '../../services/getSingleArticle'
import { conseguirComentarios } from '../../services/getComments'
import { Comments } from '../comments/Comments'
import { CreateComment } from '../comments/createComment'





export const Articulo = () => {

	const [articulo, setArticulos] = useState({})
	const [publications, setPublications] = useState([])
	const [contador, setContador] = useState()
	const [cargando, setCargando] = useState(true)
	const params = useParams()


	useEffect(() => {
		conseguirArticulo(params.id).then(res => {
			setArticulos(res.datos)
			setCargando(res.cargando)
		})
		conseguirComentarios(params.id).then(res => {
			const { contador, publications } = res
			setContador(contador)
			setPublications(publications)
		})
	}, [params.id])




	return (
		<div className='jumbo'>
			{cargando ? "Cargando.." :
				<>

					{/* ~~AQUI VA EL ARTICULO~~ */}
					<div className="mascara" >
						{articulo.imagen == "default.png" && <img src="https://i.ytimg.com/vi/e7FIjEhDtME/maxresdefault.jpg" alt="image-por-defecto" />}
						{articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.image} alt="image-por-defecto" />}
					</div>
					<p>Comentarios: {contador}</p>
					<h1>{articulo.titulo}</h1>
					<p>{articulo.contenido}</p>
					<span>{articulo.fecha}</span>

					{/* SECCION COMENTARIOS  */}
					<h3>Comentarios</h3>

					{publications.length >= 1 ?
						<Comments publications={publications} />
						:
						<p>No hay comentarios.</p>}

					{/* SECCION DEJAR COMENTARIOS */}
					<CreateComment publications={publications}
						setPublications={setPublications}
						params={params.id} />



				</>
			}
		</div>


	)

}

