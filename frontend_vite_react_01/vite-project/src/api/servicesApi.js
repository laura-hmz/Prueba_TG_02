import axios from 'axios'

const servicesApi = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const getServices = async () => {
    const res = await servicesApi.get("/services")
    return res.data;
}

export const lastServicesAdded = async () => {
    const res = await servicesApi.get("/last-services-added")
    return res.data;
}

export const getServicesById = async (id) => {
    const res = await servicesApi.get(`/services/${id}`)
    return res.data;
}
export const createService = async (service) => {
    const res = await servicesApi.post("/services", service)
    return res.data
}
export const updateService = async (service) => {
    const res = await servicesApi.put(`/services/${service._id}`, service)
    return res.data
}
export const deleteService = async (id) => {
    const res = await servicesApi.delete(`/services/${id}`)
    return res.data
}
export const listServicesIdUser = async (id) => {
    const res = await servicesApi.get(`/list-services-user/${id}`)
    return res.data
}