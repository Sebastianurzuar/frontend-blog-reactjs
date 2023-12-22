import React from 'react'
import { Global } from '../../helpers/Global';
import '../../../public/styles/newcourses.css'
import { Link } from 'react-router-dom';

export const NewCourses = ({ articulos }) => {

  if (articulos && articulos.length >= 2) {
    // Tomar los primeros dos elementos del array
    const primerArticulo = articulos[0];
    const segundoArticulo = articulos[1];

    return (
      <>
        <h1>Ultimas Noticias:</h1>
        <div className="contenedor">
          {/* Primer artículo */}
          <Link to={`/articulo/${primerArticulo._id}`} className="articulo">
            <h2>{primerArticulo.titulo}</h2>
            {primerArticulo.imagen == "default.png" && <img src="https://i.ytimg.com/vi/e7FIjEhDtME/maxresdefault.jpg" alt="image-por-defecto" />}
            {primerArticulo.imagen != "default.png" && <img src={Global.url + "imagen/" + primerArticulo.imagen} alt="image-por-defecto" />}
            <p>Número de comentarios: {primerArticulo.comentarios}</p>
          </Link>

          {/* Segundo artículo */}
          <Link to={`/articulo/${segundoArticulo._id}`} className="articulo">
            <h2>{segundoArticulo.titulo}</h2>
            {segundoArticulo.imagen == "default.png" && <img src="https://i.ytimg.com/vi/e7FIjEhDtME/maxresdefault.jpg" alt="image-por-defecto" />}
            {segundoArticulo.imagen != "default.png" && <img src={Global.url + "imagen/" + segundoArticulo.imagen} alt="image-por-defecto" />}
            <p>Número de comentarios: {segundoArticulo.comentarios}</p>
          </Link >
        </div>
      </>
    );
  } else {
    // Si no hay suficientes artículos, puedes renderizar un mensaje de advertencia
    return <p>No hay suficientes artículos para mostrar.</p>;
  }
};

