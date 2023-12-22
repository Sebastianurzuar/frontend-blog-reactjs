import React from 'react'
import { useState } from 'react'
import { UseForm } from '../../hooks/useForm'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export const Crear = () => {

    const { formulario, enviado, cambiado } = UseForm({})
    const [resultado, setResultado] = useState('')
    const { auth } = useAuth()
    console.log(auth)
    const navigate = useNavigate();

    const guardarArticulos = async (e) => {
        e.preventDefault()
        //Recoger datos del formulario con hookuseForm
        let nuevoArticulo = (formulario)
        //Guardar articulo en el backend
        const { datos } = await fetch(Global.url + "crear", {
            method: 'POST',
            body: JSON.stringify(nuevoArticulo),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
        console.log(datos)
        //Si todo ha ido bien entonces
        if (datos.status === 'success') {

            //Capturamos la imagen
            const fileInput = document.querySelector("#file")
            //Se adjunta la imagen a un formdata
            const formData = new FormData
            formData.append("file0", fileInput.files[0])
            // Guardamos la imagen en el backend
            const subida = await Peticion(Global.url + "subir-imagen/" + datos.articulo._id, "POST", formData, true)
            if (subida.datos.status == 'error') { setResultado('error') }
            else { setResultado('exito') }
        } else {
            setResultado("validacion")
        }
    }

    const navigateToLogin = () => {
        alert('Debes tener permisos especiales para crear un artículo. Porfavor, contacta con un administrador.')
        navigate('/inicio');
    }

    return (
        <div className='jumbo'>
            <h1>Crear Artículo</h1>
            <p>Formulario para crear artículos:</p>

            <strong>{resultado == 'exito' ? "Artículo creado con éxito" : ""}</strong>

            <strong>{resultado == 'error' ? "Artículo sin imagen creado" : ""}</strong>
            <strong>{resultado == 'validacion' ? "No se ha validado la información!" : ""}</strong>
            <hr />

            <form className='formulario' onSubmit={auth.rol == 'role_admin' ? guardarArticulos : navigateToLogin}>

                <div className="form-group">
                    <label htmlFor="titulo">Titulo</label>
                    <input type="text" name="titulo" onChange={cambiado} />
                </div>

                <div className="form-group">
                    <label htmlFor="contenido">Contenido</label>
                    <textarea type="text" name="contenido" onChange={cambiado} />
                </div>
                <div className="form-group">
                    <label htmlFor="file0">Imagen</label>
                    <input type="file" name="file0" id="file" />
                </div>
                <input type="submit" value="Guardar" className='btn btn-success' />
            </form>
        </div>
    )
}
