import { Global } from "../helpers/Global"
import { Peticion } from "../helpers/Peticion"

//FUNCION PARA BOTON ELIMINAR
export const eliminar = async (id, articulos) => {
  //Conseguir datos
  let { datos } = await Peticion(Global.url + "articulo/" + id, "DELETE")
  let peticion = await Peticion(Global.url + "publication/" + id, "DELETE")
  //Comprobar si todo ha salido bien
  if (datos.status == "succes") {
    //Se crea un nuevo array con todo articulo cuyo id no coincida con el que se quiere eliminar
    let nuevoArray = articulos.filter(articulo => articulo._id !== id)
    //Se setea el array de artículos con el actualizado
    return nuevoArray
  }
}