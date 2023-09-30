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
  const { id_usuario, nombre,descripcion,horarios,tipo_servicio,estado,area_0,tipo_habitacion_1,caracteristicas_habitacion_1,tipo_vehiculo_2,area_otro_servicio_3} = req.body;
  serviceSchema
    .updateOne({ _id: id }, { $set: {id_usuario,nombre,descripcion,horarios,tipo_servicio,estado,area_0,tipo_habitacion_1,caracteristicas_habitacion_1,tipo_vehiculo_2,area_otro_servicio_3} })
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
// PRUEBA MATCHMAKING
const procesadorPrueba = async (req, res) => {
   
    try {
        const users = await userServiceSchema.find({}, "resultados_encuesta");
        const surveyResults = users.map(user => user.resultados_encuesta);
        const flatSurveyResults = await surveyResults.flat();

        const resultado_encuesta_cliente = [
            [0, 0, 0, 0, 0.5, 0, 1, 0.5, 0, 1.5, 0, 1, 0.5, 1.5, 0],
            [0, 0, 0, 0, 0.5, 0, 1, 0.5, 0, 0, 0, 1, 0.5, 0, 0]
        ];
        const serviceIds = ['5f3142928d39f50022400002', '5f3142928d39f50022400001']
        const querySample = [
            [1, 0, 0, 0.5, 0, 1.5, 0, 0, 0, 0.5, 1, 0, 0.5, 0, 1.5]
        ];
        
        const intento = await processors_matchmaking.procesadorPrueba(resultado_encuesta_cliente, serviceIds, querySample);
        console.log("sapo qlido: ", intento, typeof intento);
        //console.log("primer id: ", intento[0][0]);

        res.status(200).json(
            {
                surveyResults: flatSurveyResults,
                intento
              }
        );

    } catch (error) {
        console.log(error);
    }
};
//Funciones generales para matchmaking
const orderServices1 = async (services, idsServicios) => {
  
  const serviciosOrdenados = [];
  const serviciosPorId = services.reduce((acc, servicio, i) => {
      acc[servicio._id.toString()] = servicio;
      return acc;
  }, {});

  idsServicios.map((ids) => {
    console.log("ids: ", ids, typeof ids);

    for (const idServicio of ids) {
        console.log("este es el ide servicio dentro del for",idServicio)
          if (idServicio in serviciosPorId) {
              serviciosOrdenados.push(serviciosPorId[idServicio]);
           } else {
             console.log("Servicio no encontrado:", idServicio);
           }
      }

  });
  
  return serviciosOrdenados;
};
const searchServices = async (req, res) => {
    try {
        const { diaSemana, horaBusquedaInicio, horaBusquedaFinal, estado, nombre,
           tipo_servicio, parqueadero_carro, parqueadero_moto, permite_mascota, area_0, 
           tipo_habitacion_1, tipo_vehiculo_2, area_otro_servicio_3 } = req.query;

        // Construye la consulta dinámica
        const query = {};

        if (diaSemana) {
            query['horarios.dia_semana'] = { $regex: new RegExp(diaSemana, 'i') };
        }
        if (horaBusquedaInicio) {
            query['horarios.hora_de_inicio'] = { $lte: Number(horaBusquedaInicio) };
        }
        if(horaBusquedaFinal){
          query['horarios.hora_de_finalizacion'] = { $gt: Number(horaBusquedaFinal) };
        }

        if (nombre) {
          query['nombre'] = { $regex: new RegExp(nombre, 'i') };
        }

        if (estado) {
            query['estado'] = Number(estado);
        }

        

        if (tipo_servicio) {
            query['tipo_servicio'] = { $regex: new RegExp(tipo_servicio, 'i') };
        }
        if(parqueadero_carro){
          query['caracteristicas_habitacion_1.nombre'] = { $regex: new RegExp(parqueadero_carro, 'i') };
        }
        if(parqueadero_moto){
          query['caracteristicas_habitacion_1.nombre'] = { $regex: new RegExp(parqueadero_moto, 'i') };
        }
        if(permite_mascota){
          query['caracteristicas_habitacion_1.nombre'] = { $regex: new RegExp(permite_mascota, 'i') };
        }
        if (area_0) {
            query['area_0'] = { $regex: new RegExp(area_0, 'i') };
        }

        if (tipo_habitacion_1) {
            query['tipo_habitacion_1'] = { $regex: new RegExp(tipo_habitacion_1, 'i') };
        }

        if (tipo_vehiculo_2) {
            query['tipo_vehiculo_2'] = { $regex: new RegExp(tipo_vehiculo_2, 'i') };
        }

        if (area_otro_servicio_3) {
            query['area_otro_servicio_3'] = { $regex: new RegExp(area_otro_servicio_3, 'i') };
        }

        // Realiza la búsqueda con la consulta construida
        const result = await serviceSchema.find(query);
        //return res.status(200).json(result);
        return result

    } catch (error) {
        //return res.status(500).json(error);
        console.log(error);
    }
};
//MATCHMAKING services users
const busqueda_servicios = async (req, res) => {
    const {id_cliente} = req.query;
  
    try {
      //   "horarios.hora_de_inicio": { $lte: horaBusqueda },
      //   "horarios.hora_de_finalizacion": { $gt: horaBusqueda },
      const services= await searchServices(req, res);
      //console.log("services2: ", services);
      if (!services || services.length === 0) {
        return res.status(404).json({ message: "No se encontraron servicios que cumplan con el criterio de búsqueda" });
      }else { 
        console.log("services OK");
      }
      const serviceIds = services.reduce((acc, service) => {
        acc.push(service._id);
        return acc;
      }, []);
      const userIds = services.reduce((acc, service) => {
        acc.push(service.id_usuario);
        return acc;
      }, []);
      const client = await userServiceSchema.findOne(
        { _id: id_cliente }
      )
      if (!client) {
        return res.status(404).json({ message: "No se encontró el cliente especificado" });
      } else {
        //console.log("client:", client);
        console.log("Client ok");
      }
      //const users = await userServiceSchema.findByIds(userIds);
      const users = await userServiceSchema.find(
               { _id: { $in: userIds } },
               "resultados_encuesta"
             );
      
      const surveyResultsList = users.map(user => user.resultados_encuesta);
      const resultado_encuesta_cliente = [client.resultados_encuesta];
      const processedResults = await processors_matchmaking.procesadorPrueba(surveyResultsList, serviceIds,resultado_encuesta_cliente);
      // const pruebitaIDS= [
      //   [
      //     "64e5adacfa70daf3b6295126",
      //     "64e5a8c6fa70daf3b629510f"
          
      //   ]
      // ]
      const orderedServices = await orderServices1(services, processedResults);
      console.log("Backend -> processedResultsOrder: ", processedResults);
      res.json({orderedServices});
    } catch (error) {
      res.status(500).json({ message: 'Error processing matchmaking', error });
      console.log(error);
    }
  };

module.exports = {
    procesadorPrueba, busqueda_servicios, searchServices, createService, 
    getServices, getServiceId, deleteService, updateService, listServicesIdUser, lastServicesAdded
}