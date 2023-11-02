import axios from 'axios'

// const usersApi = axios.create({
//     baseURL: 'http://localhost:3000/api/',
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })

const usersApi = axios.create({
    baseURL: 'https://backend-services-univalle.onrender.com/api/',
    headers: {
        'Content-Type': 'application/json',
    },
  })

export const getUserByEmail = async (email) => {
    const res = await usersApi.get(`/users/email/${email}`)
    //console.log(res.data);
    return res.data;
}

export const createUser = async (user) => {
    const res = await usersApi.post('/users', user)
    //console.log(res.data);
    return res.data;
}
export const updateUser = async (user) => {
    const res = await usersApi.put(`/users/${user._id}`, user)
    //console.log(res.data);
    return res.data;
}
export const getUserId = async (id) => {
    try {
        const res = await usersApi.get(`/users/${id}`)
        if (res.data && res.data._id) {
            // Si existe un _id en los datos, entonces se encontró un servicio válido
            return res.data;
        } else {
            return null; // No se encontró un servicio válido
        }
    } catch (error) {
        console.error('Ocurrió un error al obtener el usuario:', error);
        throw error; 
    }
}