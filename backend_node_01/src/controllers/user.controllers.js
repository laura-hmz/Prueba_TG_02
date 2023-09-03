const userSchema = require("../models/user");

const createUser = async (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}
const getUsers = async (req, res) => {
    userSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}
const getUserId = async (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}
const deleteUser = async (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { correo, nombre,sexo,carrera,semestre,ciudad_residencia,edad,estado,puntuacion,resultados_encuesta} = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: {correo, nombre,sexo,carrera,semestre,ciudad_residencia,edad,estado,puntuacion,resultados_encuesta} })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}
module.exports = {
    createUser, getUsers, getUserId, deleteUser, updateUser 
}