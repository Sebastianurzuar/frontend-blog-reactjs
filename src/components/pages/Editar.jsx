import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { UseForm } from '../../hooks/useForm'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'

export const Editar = () => {

    const { formulario, enviado, cambiado } = UseForm({})
    const [articulo, setArticulos] = useState({})
    const [resultado, setResultado] = useState('')
    const params = useParams()

    useEffect(() => {
        conseguirArticulo();
    }, [])

    const editarArticulo = async (e) => {
        e.preventDefault()

        //Recoger datos del formulario con hookuseForm
        let nuevoArticulo = (formulario)
        //Guardar articulo en el backend
        const { datos } = await Peticion(Global.url + "articulo/" + params.id, "PUT", nuevoArticulo)


        //Si todo ha ido bien entonces subimos la imagen
        if (datos.status === 'succes') {
            //Capturamos la imagen
            const fileInput = document.querySelector("#file")
            //Se adjunta la imagen a un formdata
            const formData = new FormData
            formData.append("file0", fileInput.files[0])
            // Guardamos la imagen en el backend
            const subida = await Peticion(Global.url + "subir-imagen/" + datos.articulo._id, "POST", formData, true)
            if (subida.datos.status == 'error') { setResultado('error') }
            else { setResultado('exito') }
        }
    }

    //Conseguir y almacenar un articulo
    const conseguirArticulo = async () => {
        const { datos } = await Peticion(Global.url + "articulo/" + params.id, "GET")
        if (datos.status === 'success') { setArticulos(datos.miArticulo) }
    }

    return (
        <div className='jumbo'>
            <h1>Crear Artículo</h1>
            <p>Formulario para editar artículos:{articulo.titulo}</p>

            <strong>{resultado == 'exito' ? "Artículo editado con éxito" : ""}</strong>

            <hr />

            <form className='formulario' onSubmit={editarArticulo}>

                <div className="form-group">
                    <label htmlFor="titulo">Titulo</label>
                    <input type="text" name="titulo" onChange={cambiado} defaultValue={articulo.titulo} />
                </div>

                <div className="form-group">
                    <label htmlFor="contenido">Contenido</label>
                    <textarea type="text" name="contenido" onChange={cambiado} defaultValue={articulo.contenido} />
                </div>
                <div className="form-group">
                    <label htmlFor="file0">Imagen</label>
                    <div className="mascara">
                        {articulo.imagen == "default.png" && <img src="https://i.ytimg.com/vi/e7FIjEhDtME/maxresdefault.jpg" alt="image-por-defecto" />}
                        {articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen} alt="image-por-defecto" />}
                    </div>
                    <input type="file" name="file0" id="file" />
                </div>
                <input type="submit" value="Guardar" className='btn btn-success' />
            </form>
        </div>
    )
}
