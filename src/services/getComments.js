import { Global } from "../helpers/Global"
import { Peticion } from "../helpers/Peticion"

//Conseguir comentarios por id de articulo
export const conseguirComentarios = async (id) => {
  try {
    const { datos } = await Peticion(Global.url + 'publication/' + id, "GET")
    if (datos.status == 'success') {
      return {
        contador: datos.contador,
        publications: datos.consulta
      }
    }
  } catch (error) {
    console.log(error)
  }
}