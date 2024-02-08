import React from 'react'
import { Global } from '../../helpers/Global'

export const Comments = ({ publications }) => {
  return (
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
  )
}
