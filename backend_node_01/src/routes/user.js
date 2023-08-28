const express = require("express");
const userSchema = require("../models/user");

const router = express.Router();

// create user OK
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users OK
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user OK
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user OK
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user OK
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { correo, nombre,sexo,carrera,semestre,ciudad_residencia,edad,estado,puntuacion,resultados_encuesta} = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: {correo, nombre,sexo,carrera,semestre,ciudad_residencia,edad,estado,puntuacion,resultados_encuesta} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;


