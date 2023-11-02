import axios from 'axios'

// const savedServicesApi = axios.create({
//     baseURL: 'http://localhost:3000/api/',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })

const savedServicesApi = axios.create({
    baseURL: 'https://backend-services-univalle.onrender.com/api/',
    headers: {
        'Content-Type': 'application/json',
    },
  })

export const createServiceSaved = async (savedService) => {
    const res = await savedServicesApi.post('/saved-services', savedService)
    //console.log('lo que entro',savedService);
    //console.log(res.data);
    return res.data;
}
export const getSavedServicesByUserId = async (userId) => {
    const res = await savedServicesApi.get(`/saved-services/${userId}`)
    //console.log(res.data);
    return res.data
}
export const deleteServiceSaved = async (savedServiceId) => {
    const res = await savedServicesApi.delete(`/saved-services/${savedServiceId}`)
    //console.log(res.data);
    return res.data
}
export const deleteServiceSaved2 = async (id_usuario, id_servicio) => {
    const res = await savedServicesApi.delete(`/saved-services/${id_usuario}/${id_servicio}`)
    //console.log(res.data);
    return res.data
}
export const getSavedServiceList = async (userId) => {
    const res = await savedServicesApi.get(`/saved-servicesIdList/${userId}`)
    //console.log(res.data);
    return res.data
}

