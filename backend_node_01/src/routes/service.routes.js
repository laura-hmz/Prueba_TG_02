const express = require("express");
const serviceCtrl = require('../controllers/service.controllers');
const matchCtrl = require('../controllers/match.controller');
const router = express.Router();

//create service OK
router.post("/services", serviceCtrl.createService);

// get all services OK
router.get("/services",serviceCtrl.getServices);

// get a service OK
router.get("/services/:id", serviceCtrl.getServiceId);

// delete a service OK
router.delete("/services/:id", serviceCtrl.deleteService);

// update a service OK
router.put("/services/:id", serviceCtrl.updateService);

//listar los servicios ofrecidos por un usuario
router.get("/list-services-user",serviceCtrl.listServicesIdUser);

//Mostrar ultimos servicios añadidos
router.get("/last-services-added/:id",serviceCtrl.lastServicesAdded);

// Prueba 01 funcionamiento de matchmaking OK
router.get("/survey-results", matchCtrl.procesadorPrueba);

//Buscar servicios con emparejamiento de usuarios OK
router.get("/survey-results-array",matchCtrl.busqueda_servicios);

//Buscar servicios (solo filtro a base de datos) OK
router.get("/search-services",matchCtrl.searchServices);

module.exports = router;
