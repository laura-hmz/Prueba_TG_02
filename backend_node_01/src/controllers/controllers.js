const prueba = require('../processors/prueba');
const serviceSchema = require("../models/service");
const User = require("../models/user");

const procesadorPrueba = async (req, res) => {
    // userServiceSchema
    //     .find({}, "resultados_encuesta") // Obtener solo el campo resultados_encuesta
    //     .then(async (users) => {
    //         // const surveyResults = users.map(user => user.resultados_encuesta).flat(); // Obtener todos los resultados en un array
    //         const intento = await prueba.procesadorPrueba(resultado_encuesta_cliente, serviceIds, querySample);
    //         console.log("sapo qlido: ", intento, typeof intento);
    //         res.json({
        //             surveyResults,
        //             intento
        //         });
        //     })
        //     .catch((error) => res.status(500).json({
            //         message: error
            //     }));
            try {
        const resultado_encuesta_cliente = [
            [0, 0, 0, 0, 0.5, 0, 1, 0.5, 0, 1.5, 0, 1, 0.5, 1.5, 0],
            [0, 0, 0, 0, 0.5, 0, 1, 0.5, 0, 0, 0, 1, 0.5, 0, 0]
        ];
        const serviceIds = ['5f3142928d39f50022400002', '5f3142928d39f50022400001']
        const querySample = [
            [1, 0, 0, 0.5, 0, 1.5, 0, 0, 0, 0.5, 1, 0, 0.5, 0, 1.5]
        ];
        const intento = prueba.procesadorPrueba(resultado_encuesta_cliente, serviceIds, querySample);
        console.log("sapo qlido: ", intento, typeof intento);

        res.status(200).json(
            intento
        );

    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    procesadorPrueba
}