import { Global } from "../helpers/Global"
import { Peticion } from "../helpers/Peticion"

//Lógica para buscar artículos por ID
export const conseguirArticulo = async (id) => {

  const { datos } = await Peticion(Global.url + "articulo/" + id, "GET")

  if (datos.status === 'success') {
    return {
      datos: datos.miArticulo,
      cargando: false
    }

  }

}