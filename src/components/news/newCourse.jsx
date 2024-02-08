import React from 'react'
import { Global } from '../../helpers/Global'
import { Link } from 'react-router-dom';

export const NewCourse = ({ articulos }) => {

  return (
    <>
      <Link className="search newcourse" to={`/articulo/${articulos._id}`} >
        {/* Primer artículo */}
        <div className="newcourse__title">
          <h5>Ultimas Noticias:</h5>
        </div>
        {articulos.imagen == "default.png" && <img className="card__image" src="https://i.ytimg.com/vi/e7FIjEhDtME/maxresdefault.jpg" alt="image-por-defecto" />}
        {articulos.imagen != "default.png" && <img className="card__image" src={Global.url + "imagen/" + articulos.imagen} alt="image-por-defecto" />}

        <p >{articulos.titulo}</p>
        <p className='card__cta'>Numero de comentarios: {articulos.comentarios}</p>

      </Link >

    </>
  );
  // } else {
  //   // Si no hay suficientes artículos, puedes renderizar un mensaje de advertencia
  //   return (
  //     <div className="contenedor">
  //       {/* Segundo artículo */}
  //       <Link to={`/inicio`} className="articulo">
  //         <h2>Titulo</h2>
  //         <img src="https://www.elhuertodecirilo.com/wp-content/uploads/2019/02/proximamente.jpg" alt="image-por-defecto" />

  //         <p>Nuevo curso proximamente..</p>
  //       </Link >

  //       <Link to={`/inicio`} className="articulo">
  //         <h2>Titulo</h2>
  //         <img src="https://www.elhuertodecirilo.com/wp-content/uploads/2019/02/proximamente.jpg" alt="image-por-defecto" />

  //         <p>Nuevo curso proximamente..</p>
  //       </Link >
  //     </div>
  //   )
  // }
}

