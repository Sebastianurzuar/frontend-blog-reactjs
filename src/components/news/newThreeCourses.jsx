import React from 'react'
import { Link } from 'react-router-dom'

export const NewThreeCourses = ({ articulos }) => {
  console.log(articulos)
  const nuevoArray = articulos.filter(articulo => articulo.comentarios >= 5)


  return (
    <div className="search newThree">
      <h4 className="newThree__tittle">Mejores Noticias:</h4>
      {
        nuevoArray.map(articulo => {
          return (
            <Link className="newThree__container" to={"/articulo/" + articulo._id} key={articulo._id}>
              {articulo.imagen == "default.png" && <img className="card__image" src="https://i.ytimg.com/vi/e7FIjEhDtME/maxresdefault.jpg" alt="image-por-defecto" />}
              {articulo.imagen != "default.png" && <img className="card__image" src={Global.url + "imagen/" + articulo.imagen} alt="image-por-defecto" />}
              <div className="newThree__content">
                <p>{articulo.titulo}</p>
                <p>Numero de comentarios: {articulo.comentarios}</p>
                {articulo.startDate !== null &&
                  <p> {articulo.startDate} </p>
                }
              </div>
            </Link>)
        })
      }
    </div>
  )
}
