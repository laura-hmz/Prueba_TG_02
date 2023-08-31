const processors_matchmaking = require('../processors/matchmaking_processor_02');
const serviceSchema = require("../models/service");
const userServiceSchema = require("../models/user");
const User = require("../models/user");

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

const orderServices = async (services, idsServicios) => {
//     try{
//         const orderedServices = services.filter(service => processedResults.hasOwnProperty(service._id));
//         orderedServices.sort((a, b) => processedResults[a._id] - processedResults[b._id]);
//         return orderedServices;
//     } catch(error){
//         console.log(error);
//     }
    const serviciosPorId = services.reduce((acc, servicio, i) => {
        acc[servicio._id] = servicio;
        console.log("acc:",acc)
        return acc;
    }, {});

    // Crea una lista de servicios ordenados.
    const serviciosOrdenados = [];
    for (const idServicio of idsServicios) {
        if (idServicio in serviciosPorId) {
        serviciosOrdenados.push(serviciosPorId[idServicio]);
        } else {
            console.log("vacio")
        return [];
        }
  }

  return serviciosOrdenados;

    
  };

const ordenarServicios = async (idsServicios, services) => {
    try {
        const serviciosOrdenados = idsServicios.map(id => services.find(servicio => servicio._id.toString() === id));
        return serviciosOrdenados;
    } catch (error) {
        console.log(error)
    }
    
}

const busqueda_servicios = async (req, res) => {
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
      }else { 
        console.log("tipo servicio:", typeof services);
        console.log("services:",services);
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
        console.log("client:", client);
      }
      //const users = await userServiceSchema.findByIds(userIds);
      const users = await userServiceSchema.find(
               { _id: { $in: userIds } },
               "resultados_encuesta"
             );
      

  
      const surveyResultsList = users.map(user => user.resultados_encuesta);
      const resultado_encuesta_cliente = [client.resultados_encuesta];
      const processedResults = await processors_matchmaking.procesadorPrueba(surveyResultsList, serviceIds,resultado_encuesta_cliente);
      console.log("Los servicios: ", processedResults);
      //const orderedServices = orderServices(services, processedResults);
      //const orderedServices = Object.values(processedResults).map(id => services.find(servicio => servicio._id.toString() === id));
      const orderedServices = await ordenarServicios(Object.values(processedResults), services);
    
        // const orderedServices = services.filter(service => processedResults.hasOwnProperty(service._id));
        // orderedServices.sort((a, b) => processedResults[a._id] - processedResults[b._id]);

      console.log("Los servicios ordenados:",orderedServices)
      res.json({processedResults,orderedServices});
    } catch (error) {
      res.status(500).json({ message: 'Error processing matchmaking', error });
      console.log(error);
    }
  };

module.exports = {
    procesadorPrueba, busqueda_servicios
}