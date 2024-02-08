import { Global } from "../helpers/Global";
import { Peticion } from "../helpers/Peticion";

export const peticionPrueba = async () => {
  try {
    const { datos } = await Peticion(Global.url + 'articulos/ultimos', "GET")
    if (datos.status === 'success') {
      return {
        data: datos.nuevoArray,
        cargandop: false
      }
    } else {
      console.error('Error al obtener los artículos:', data.message);
    }
  } catch (error) {
    console.error('Error en la solicitud:', error.message);
  }
}

