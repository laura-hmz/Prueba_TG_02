const express = require("express");
const serviceSchema = require("../models/service"); 
const userServiceSchema = require("../models/user");
const matchmakingProcessor = require('../processors/matchmakingProcessor');
const matchmakingProcessor01 = require('../processors/matchmaking_processor_01');
const prueba= require('../processors/prueba');

const UserCtrl = require('../controllers/controllers');


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

// (req, res) => {
//   userServiceSchema
//       .find({}, "resultados_encuesta") // Obtener solo el campo resultados_encuesta
//       .then(async (users) => {
//           const surveyResults = users.map(user => user.resultados_encuesta).flat(); // Obtener todos los resultados en un array
//           const resultado_encuesta_cliente= [
//             [0, 0, 0, 0, 0.5, 0, 1, 0.5, 0, 1.5, 0, 1, 0.5, 1.5, 0],
//             [0, 0, 0, 0, 0.5, 0, 1, 0.5, 0, 0, 0, 1, 0.5, 0, 0]
//             ];
//           const serviceIds=[ '5f3142928d39f50022400002', '5f3142928d39f50022400001' ]
//           const querySample= [[1, 0, 0, 0.5, 0, 1.5, 0, 0, 0, 0.5, 1, 0, 0.5, 0, 1.5]]
//           const  intento= await prueba.procesadorPrueba(resultado_encuesta_cliente, serviceIds,querySample);
//           //const arrayIntento = Array.from(intento);
//           //console.log("sapo qlido: ", arrayIntento.tolist());
//           console.log("sapo qlido: ", intento, typeof intento);
//           res.json({ surveyResults, intento });
//       })
//       .catch((error) => res.status(500).json({ message: error }));

async function getNearestNeighbors() {
  const surveyResults = await userServiceSchema
      .find({}, "resultados_encuesta") // Obtener solo el campo resultados_encuesta
      .then((users) => {
          const surveyResults = users.map(user => user.resultados_encuesta).flat(); // Obtener todos los resultados en un array
          const resultado_encuesta_cliente= [
            [0, 0, 0, 0, 0.5, 0, 1, 0.5, 0, 1.5, 0, 1, 0.5, 1.5, 0],
            [0, 0, 0, 0, 0.5, 0, 1, 0.5, 0, 0, 0, 1, 0.5, 0, 0]
            ];
          const serviceIds=[ '5f3142928d39f50022400002', '5f3142928d39f50022400001' ]
          const querySample= [[1, 0, 0, 0.5, 0, 1.5, 0, 0, 0, 0.5, 1, 0, 0.5, 0, 1.5]]
          const  intento= prueba.procesadorPrueba(resultado_encuesta_cliente, serviceIds,querySample);
          return intento;
      })
      .catch((error) => res.status(500).json({ message: error }));
}



//intento nuevo con array 
router.get("/survey-results-array", async (req, res) => {
  const { diaSemana, horaBusqueda, estado, id_cliente } = req.query;

  try {
    const services = await serviceSchema.find({
      "horarios.dia_semana": diaSemana,
      "horarios.hora_de_inicio": { $lte: horaBusqueda },
      "horarios.hora_de_finalizacion": { $gt: horaBusqueda },
      "estado": estado
    });

    if (!services || services.length === 0) {
      return res.status(404).json({ message: "No se encontraron servicios que cumplan con el criterio de búsqueda" });
    }

    const serviceIds = [];
    const userIds = [];

    services.forEach(service => {
      serviceIds.push(service._id);
      userIds.push(service.id_usuario);
    });

    const client = await userServiceSchema.findOne(
      { _id: id_cliente },
      "resultados_encuesta"
    );

    if (!client) {
      return res.status(404).json({ message: "No se encontró el cliente especificado" });
    }

    const users = await userServiceSchema.find(
      { _id: { $in: userIds } },
      "resultados_encuesta"
    );

    const surveyResultsList = users.map(user => user.resultados_encuesta);
    const resultado_encuesta_cliente = [client.resultados_encuesta];
    //const processedResults = await matchmakingProcessor01.processMatchmaking(surveyResultsList, serviceIds, resultado_encuesta_cliente);
    const  processedResults = prueba.procesadorPrueba(resultado_encuesta_cliente,serviceIds);
    console.log("Vida treinta hpta los servicios: ",processedResults);
    res.json(processedResults);
  } catch (error) {
    res.status(500).json({ message: 'Error processing matchmaking', error });
  }
});

module.exports = router;
