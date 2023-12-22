import React, { useState } from 'react'
import { Peticion } from '../../helpers/Peticion'
import { Global } from '../../helpers/Global'
import { Link } from 'react-router-dom';

export const NewCourse = ({ articulos }) => {


  if (articulos.length >= 1) {
    // Tomar los primeros dos elementos del array
    const primerArticulo = articulos[0];

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
          <Link to={`/inicio`} className="articulo">
            <h2>Titulo</h2>
            <img src="https://www.elhuertodecirilo.com/wp-content/uploads/2019/02/proximamente.jpg" alt="image-por-defecto" />

            <p>Nuevo curso proximamente..</p>
          </Link >
        </div>
      </>
    );
  } else {
    // Si no hay suficientes artículos, puedes renderizar un mensaje de advertencia
    return (
      <div className="contenedor">
        {/* Segundo artículo */}
        <Link to={`/inicio`} className="articulo">
          <h2>Titulo</h2>
          <img src="https://www.elhuertodecirilo.com/wp-content/uploads/2019/02/proximamente.jpg" alt="image-por-defecto" />

          <p>Nuevo curso proximamente..</p>
        </Link >

        <Link to={`/inicio`} className="articulo">
          <h2>Titulo</h2>
          <img src="https://www.elhuertodecirilo.com/wp-content/uploads/2019/02/proximamente.jpg" alt="image-por-defecto" />

          <p>Nuevo curso proximamente..</p>
        </Link >
      </div>
    )
  }
};
