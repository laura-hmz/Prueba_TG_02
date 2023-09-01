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


const orderServices1 = async (services, idsServicios) => {
  
  const serviciosOrdenados = [];
  const serviciosPorId = services.reduce((acc, servicio, i) => {
      acc[servicio._id.toString()] = servicio;
      return acc;
  }, {});
  //console.log("serviciosPorId (ACC): ", idsServicios)

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
        //console.log("tipo servicio:", typeof services);
        //console.log("services:",services);
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
      //console.log("Los servicios ordenados:",orderedServices)
      res.json({processedResults,orderedServices});
    } catch (error) {
      res.status(500).json({ message: 'Error processing matchmaking', error });
      console.log(error);
    }
  };

module.exports = {
    procesadorPrueba, busqueda_servicios
}