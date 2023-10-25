const processors_matchmaking = require('../processors/matchmaking_processor_02');
const serviceSchema = require("../models/service");
const userServiceSchema = require("../models/user");
const mongoose = require('mongoose');

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

  const searchServices = async (req, res) => {
    try {
        const { diaSemana, horaBusquedaInicio, horaBusquedaFinal, estado, nombre,id_cliente,
           tipo_servicio, parqueadero_carro, parqueadero_moto, permite_mascota, area_0, 
           tipo_habitacion_1, tipo_vehiculo_2, area_otro_servicio_3, precioMinimo, precioMaximo } = req.query;

        // consulta dinámica
        const query = {};

        query['id_usuario'] = { $ne: id_cliente };

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
          const nombreNormalizado = removeAccents(nombre.toLowerCase());
          query['nombre'] = { $regex: new RegExp(nombreNormalizado.replace(/\s+/g, '\\s*'), 'gi') };
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

        if (precioMinimo && precioMaximo) {
          // Ambos valores son cadenas que se pueden convertir a números válidos.
          query['precio'] = { $gte: Number(precioMinimo), $lte: Number(precioMaximo) };
        } else if (precioMinimo) {
          // Solo precioMinimo es una cadena que se puede convertir a número válido.
          query['precio'] = { ...query['precio'], $gte: Number(precioMinimo) };
        } else if (precioMaximo) {
          // Solo precioMaximo es una cadena que se puede convertir a número válido.
          query['precio'] = { ...query['precio'], $lte: Number(precioMaximo) };
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

const orderServicesByUser = async (services, userIds) => {
    // Extraer los IDs de usuario del arreglo anidado
    const flattenedUserIds = userIds.flat();
  
    // Crear un mapa de servicios por ID de usuario
    const servicesByUserId = new Map();
  
    services.forEach(service => {
      const userIdStr = service.id_usuario.toString(); // Convierte el ObjectId a cadena
      if (!servicesByUserId.has(userIdStr)) {
        servicesByUserId.set(userIdStr, []);
      }
      servicesByUserId.get(userIdStr).push(service);
    });
  
    // Ordenar los servicios en función del orden de los IDs de usuario en flattenedUserIds
    const sortedServices = flattenedUserIds
      .map(userId => servicesByUserId.get(userId))
      .filter(services => services);
  
    // Flatten el arreglo de servicios
    const flattenedServices = sortedServices.reduce((acc, services) => acc.concat(services), []);
  
    return flattenedServices;
  };

  const busqueda_servicios = async (req, res) => {
    const {id_cliente,tipo_servicio} = req.query;
  
    try {
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

/////////////////////Acá
        const userIdsSet = new Set();

        services.forEach(service => {
          userIdsSet.add(service.id_usuario.toString());
        });

        // Para convertir el conjunto en un array nuevamente, puedes hacerlo de la siguiente manera:
        const userIds2 = Array.from(userIdsSet);
        console.log("userIds2: ", userIds2);
        //console.log("userIds: ", userIds);
        const orderServicesUser = await orderServicesByUser(services, userIds2);
        //console.log('services', services)
        //console.log("orderServicesUser: ", orderServicesUser);
//////////

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
      /////////////////AQUIIII
      const ObjectId = mongoose.Types.ObjectId;
      const users = await userServiceSchema.aggregate([
        {
          $match: {
            _id: { $in: userIds2.map(id => new ObjectId(id)) }
          }
        },
        {
          $addFields: {
            __order: {
              $indexOfArray: [userIds2.map(id => id.toString()), { $toString: '$_id' }]
            }
          }
        },
        {
          $sort: {
            __order: 1
          }
        },
        {
          $project: {
            resultados_encuesta: 1,
            resultados_encuesta_asesorias: 1,
            resultados_encuesta_transporte: 1,
            resultados_encuesta_habitaciones: 1
          }
        }
      ]);
      ////////////////
      const surveyResultsList = users.map(user => {
        switch (tipo_servicio) {
          case "Asesorías Académicas":
            return user.resultados_encuesta_asesorias;
          case "Servicio de transporte":
            return user.resultados_encuesta_transporte;
          case "Servicio de habitaciones":
            return user.resultados_encuesta_habitaciones;
          default:
            return user.resultados_encuesta;
        }
      });
      
      console.log('estos son los resultados BACKENNNDD',surveyResultsList)

      let resultado_encuesta_cliente;
      if (tipo_servicio === "Asesorías Académicas") {
        resultado_encuesta_cliente = [client.resultados_encuesta_asesorias];
      } else if (tipo_servicio === "Servicio de transporte") {
        resultado_encuesta_cliente = [client.resultados_encuesta_transporte];
      } else if (tipo_servicio === "Servicio de habitaciones") {
        resultado_encuesta_cliente = [client.resultados_encuesta_habitaciones];
      } else {
        resultado_encuesta_cliente = [client.resultados_encuesta];
      }
      //console.log('estos son los resultados CLIENTE', resultado_encuesta_cliente)
      
      //const resultado_encuesta_cliente = [client.resultados_encuesta_habitaciones];
      const processedResults = await processors_matchmaking.procesadorPrueba(surveyResultsList, userIds2,resultado_encuesta_cliente);
      //console.log("Backend -> servicesIds: ", serviceIds);
      //console.log("Backend -> users ids: ", userIds);
      //const orderedServices = await orderServices1(services, processedResults);
      const orderedServices = await orderServicesByUser(services, processedResults)
      console.log("Backend -> processedResultsOrder: ", processedResults);
      res.json({orderedServices});
    } catch (error) {
      res.status(500).json({ message: 'Error processing matchmaking', error });
      console.log(error);
    }
  };



module.exports = {
     busqueda_servicios, searchServices,procesadorPrueba
}