import axios from 'axios'

const usersApi = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const getUserByEmail = async (email) => {
    const res = await usersApi.get(`/users/email/${email}`)
    console.log(res.data);
    return res.data;
}

export const createUser = async (user) => {
    const res = await usersApi.post('/users', user)
    console.log(res.data);
    return res.data;
}