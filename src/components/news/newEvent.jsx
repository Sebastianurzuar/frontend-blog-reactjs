import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';
import useAuth from '../../hooks/useAuth';
import { eliminar } from '../../services/deleteArticle';

export const NewEvent = ({ articulos, setArticuldos }) => {
  const [countdown, setCountdown] = useState({});
  const { auth } = useAuth();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prueba);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [articulos]);

  function prueba() {
    if (articulos.length === 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const prueba = moment.utc().tz('America/Santiago');
    const horaActual = moment.utc().tz('America/Santiago')



    const difference = prueba.diff(horaActual, 'seconds')


    if (difference > 0) {
      const days = Math.floor(difference / (24 * 60 * 60));
      const hours = Math.floor((difference % (24 * 60 * 60)) / (60 * 60) + 3);
      const minutes = Math.floor((difference % (60 * 60)) / 60);
      const seconds = difference % 60;

      return { days, hours, minutes, seconds, difference };
    } else {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        difference
      };
    }
  }

  const handleClick = (id) => {
    eliminar(id, articulos).then(res => {
      setArticuldos(res);
    });
  };


  return (
    <div>
      <h2>{articulos[0].titulo}</h2>
      {auth.rol && auth.rol === 'role_admin' && (
        <div>
          <button className="delete" onClick={() => handleClick(articulos[0]._id)}>
            Borrar
          </button>
        </div>
      )}
      <div className="event-image">
        {articulos[0].imagen === 'default.png' && (
          <img width="150px" src="https://i.ytimg.com/vi/e7FIjEhDtME/maxresdefault.jpg" alt="image-por-defecto" />
        )}
        {articulos[0].imagen !== 'default.png' && (
          <img width="150px" height="150px" src={Global.url + 'imagen/' + articulos[0].imagen} alt="image-por-defecto" />
        )}
      </div>
      <h5>Comienza: {articulos[0].startDate}</h5>

      {countdown.difference <= 0 ? (
        <div className="event-box">
          <p>EVENTO EN VIVO!</p>
        </div>
      ) : (
        <p>
          Countdown: {countdown.days} días, {countdown.hours} horas, {countdown.minutes} minutos, {countdown.seconds} segundos
        </p>
      )}
    </div>
  );
};