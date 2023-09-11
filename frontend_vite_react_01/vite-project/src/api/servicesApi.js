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