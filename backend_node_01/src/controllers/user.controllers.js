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
    const { correo, nombre,sexo,carrera,semestre,ciudad_residencia,edad,estado,puntuacion,
        resultados_encuesta, resultados_encuesta_habitaciones, resultados_encuesta_asesorias, 
        resultados_encuesta_transporte} = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: {correo, nombre,sexo,carrera,semestre,ciudad_residencia,
            edad,estado,puntuacion,resultados_encuesta,resultados_encuesta_habitaciones, 
            resultados_encuesta_transporte,resultados_encuesta_asesorias } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}
const getUserByEmail = async (req, res) => {
    const { email } = req.params;

    try {
        const user = await userSchema.findOne({ correo: email });

        if (user) {
            // Si se encuentra el usuario, lo devolvemos en la respuesta
            return res.json(user);
        } else {
            // Si no se encuentra, devolvemos un mensaje apropiado
            return res.json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
};

module.exports = {
    createUser, getUsers, getUserId, deleteUser, updateUser, getUserByEmail
}