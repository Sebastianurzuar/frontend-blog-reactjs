import { Global } from "../helpers/Global"
import { Peticion } from "../helpers/Peticion"

export const conseguirArtReciente = async () => {
  //Peticion para obtener los articulos
  try {
    const { datos } = await Peticion(Global.url + "articulos/uno", "GET")
    if (datos.status === "error") {
      return {
        message: datos.message,
        cargando: false
      }
    }
    return {
      datos: datos.nuevoArray,
      cargando: false,
      message: datos.message
    }
  } catch (error) {
    console.log(error)
  }
}