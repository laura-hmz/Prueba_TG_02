const processors_matchmaking = require('../processors/matchmaking_processor_02');
const serviceSchema = require("../models/service");
const userServiceSchema = require("../models/user");

//CRUD BASICO
const createService = async (req, res) => {
  const service = serviceSchema(req.body);
  service
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}
const getServices = async (req, res) => {
  serviceSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}
const getServiceId = async (req, res) => {
  const { id } = req.params;
  serviceSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}
const deleteService = async (req, res) => {
  const { id } = req.params;
  serviceSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}
const updateService = async (req, res) => {
  const { id } = req.params;
  const { id_usuario, nombre,descripcion,horarios,tipo_servicio,estado,
    area_0,tipo_habitacion_1,caracteristicas_habitacion_1,tipo_vehiculo_2,area_otro_servicio_3,precio} = req.body;
  serviceSchema
    .updateOne({ _id: id }, { $set: {id_usuario,nombre,descripcion,horarios,tipo_servicio,estado,area_0,
      tipo_habitacion_1,caracteristicas_habitacion_1,tipo_vehiculo_2,area_otro_servicio_3,precio} })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}
const listServicesIdUser = async (req, res) => {
  try {
    const { id } = req.query;
    const data = await serviceSchema.find({ "id_usuario": id });

    if (data.length === 0) {
      // No se encontraron servicios para el usuario
      return res.json({ message: "No se encontraron servicios para este usuario." });
    }

    return res.json(data);
  } catch (error) {
    // Manejar errores
    console.error("Error al buscar servicios:", error);
    return res.status(500).json({ message: "Hubo un error al buscar servicios." });
  }
};

const lastServicesAdded = async (req, res) => {
  serviceSchema
    .find()
    .sort({ _id: -1 })
    .limit(1)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
}

module.exports = {
    createService, getServices, getServiceId, deleteService, updateService, listServicesIdUser, lastServicesAdded
}