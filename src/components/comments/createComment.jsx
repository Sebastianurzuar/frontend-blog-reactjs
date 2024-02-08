import React from 'react'
import useAuth from '../../hooks/useAuth'
import { UseForm } from '../../hooks/useForm'
import { Global } from '../../helpers/Global'

export const CreateComment = ({ publications, setPublications, params }) => {
  const { auth } = useAuth()
  const { formulario, cambiado } = UseForm()

  const comentar = async (e) => {
    e.preventDefault()
    let datos = formulario

    const peticion = await fetch(Global.url + 'publication/' + params, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      }
    })

    const response = await peticion.json()
    setPublications([...publications, response.newPublication])

  }

  return (
    <>

      <form onSubmit={auth._id ? comentar :
        e => {
          alert('Inicia sesión para comentar.')
          navigate('/users/register')
        }
      }>
        <label htmlFor="text"></label>
        {auth._id ?
          <textarea name="text" placeholder={"Comentar como" + ' ' + auth.nick} required onChange={cambiado} />
          :
          <textarea name="text" placeholder='Deja tu comentario.' required />
        }
        <input type='submit' value='Comentar' />
      </form>

    </>
  )
}
