import React from 'react'
import { useState } from 'react'
import { UseForm } from '../../hooks/useForm'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'
import useAuth from '../../hooks/useAuth'


export const Crear = () => {

    const { formulario, enviado, cambiado } = UseForm({})
    const [resultado, setResultado] = useState('')
    const { auth } = useAuth()


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


    return (
        <div className='jumbo'>
            <h1>Crear Artículo</h1>
            <p>Formulario para crear artículos:</p>

            <strong>{resultado == 'exito' ? "Artículo creado con éxito" : ""}</strong>

            <strong>{resultado == 'error' ? "Artículo sin imagen creado" : ""}</strong>
            <strong>{resultado == 'validacion' ? "No se ha validado la información!" : ""}</strong>
            <hr />

            <form className='formulario' onSubmit={guardarArticulos}>

                <div className="form-group">
                    <label htmlFor="titulo">Titulo</label>
                    <input type="text" name="titulo" onChange={cambiado} />
                </div>

                <div className="form-group">
                    <label htmlFor="contenido">Contenido</label>
                    <textarea type="text" name="contenido" onChange={cambiado} />
                </div>
                <div>
                    <label htmlFor="startDate">Start Date:</label>
                    <input type="date" name="startDate" onChange={cambiado} />
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
