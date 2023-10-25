import axios from 'axios'

const servicesApi = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const getServices = async () => {
    const res = await servicesApi.get("/services")
    //console.log(res.data);
    return res.data;
}

export const lastServicesAdded = async (id) => {
    const res = await servicesApi.get(`/last-services-added/${id}`)
    console.log(res.data);
    return res.data;
}

export const getServicesById = async (id) => {
    const res = await servicesApi.get(`/services/${id}`)
    console.log(res.data);
    return res.data;
}
export const createService = async (service) => {
    try {
      // Realizar una solicitud POST
      const res = await servicesApi.post("/services", service);
      console.log("Respuesta de la API:", res.data);
      return res.data;
    } catch (error) {
      // Manejar el error aquí, por ejemplo, imprimirlo en la consola o lanzar una excepción personalizada.
      console.error("Error al crear el servicio:", error);
      throw error; // Puedes lanzar la excepción nuevamente si lo deseas.
    }
  };
  
export const updateService = async (service) => {
    const res = await servicesApi.put(`/services/${service._id}`, service)
    console.log(res.data);
    return res.data
}
export const deleteService = async (id) => {
    const res = await servicesApi.delete(`/services/${id}`)
    console.log(res.data);
    return res.data
}
export const listServicesIdUser = async (id) => {
    const res = await servicesApi.get(`/list-services-user?id=${id}`)
    console.log(res.data);
    return res.data
}

export const busquedaMatchmaking = async (searchParams) => {
    // Convierte el objeto de búsqueda en una cadena de consulta
    const queryString = new URLSearchParams(searchParams).toString();
  
    // Realiza la solicitud GET con la cadena de consulta
    const res = await servicesApi.get(`/survey-results-array?${queryString}`);
    console.log(queryString);
    console.log(res.data);
    return res.data;
  };