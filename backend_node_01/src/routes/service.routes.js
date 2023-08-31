const express = require("express");
const serviceSchema = require("../models/service"); 
const userServiceSchema = require("../models/user");
const matchmakingProcessor = require('../processors/matchmakingProcessor');
const matchmakingProcessor01 = require('../processors/matchmaking_processor_01');
const prueba= require('../processors/matchmaking_processor_02');

const UserCtrl = require('../controllers/controllers_services');


const router = express.Router();

//create service
router.post("/services", (req, res) => {
    const service = serviceSchema(req.body);
    service
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// get all services
router.get("/services", (req, res) => {
    serviceSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// get a service
router.get("/services/:id", (req, res) => {
    const { id } = req.params;
    serviceSchema
      .findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// delete a service
router.delete("/services/:id", (req, res) => {
    const { id } = req.params;
    serviceSchema
      .deleteOne({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });

// update a service
router.put("/services/:id", (req, res) => {
    const { id } = req.params;
    const { id_usuario, nombre,horarios,tipo_servicio,estado,area_0,tipo_habitacion_1,caracteristicas_habitacion_1,tipo_vehiculo_2,area_otro_servicio_3} = req.body;
    serviceSchema
      .updateOne({ _id: id }, { $set: {id_usuario, nombre,horarios,tipo_servicio,estado,area_0,tipo_habitacion_1,caracteristicas_habitacion_1,tipo_vehiculo_2,area_otro_servicio_3} })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });


// get a service (Buscar por en rango de horarios, dia y estado)
router.get("/services", (req, res) => {
  const { diaSemana, horaBusqueda, estado } = req.body;
  const tipoBusqueda = 2;

  serviceSchema
      .find({
          "horarios.dia_semana": diaSemana,
          "horarios.hora_de_inicio": { $lte: horaBusqueda },
          "horarios.hora_de_finalizacion": { $gt: horaBusqueda },
          "tipo_servicio": tipoBusqueda,
          "estado": estado
      })
      .then((services) => {
          if (!services || services.length === 0) {
              return res.status(404).json({ message: "No se encontraron servicios que cumplan con el criterio de búsqueda" });
          }

          //const serviceIds = services.map(service => service._id); // Obtener IDs de los servicios
          //res.json({ serviceIds });
          const userIds = services.map(service => service.id_usuario); // Obtener IDs de los usuarios

          res.json({ userIds });
      })
      .catch((error) => res.status(500).json({ message: error }));
});


// sin probar
router.get("/survey-results", UserCtrl.procesadorPrueba);

//intento nuevo con array 
router.get("/survey-results-array",UserCtrl.busqueda_servicios);

module.exports = router;
