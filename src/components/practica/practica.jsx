import React from 'react'
import avatar from '../../../public/images/img/user.png'

export const Practica = () => {
  return (
    <>
      <div className='card__section1'>
        <div className="card__container1">
          <p className="card__title1">
            Clase de yoga 19/01/24 Suspendida.
          </p>
          <img src={avatar} alt="" className="card__image1" />

          <a href="#" className="card__cta1">Numero de comentarios: 25</a>

        </div>
      </div>
      <div className="card__container">
        <p className="card__title">
          Clase de yoga 19/01/24 Suspendida.
        </p>
        <img src={avatar} alt="" className="card__image" />

        <a href="#" className="card__cta">Numero de comentarios: 25</a>

      </div>
    </>
  )
}
