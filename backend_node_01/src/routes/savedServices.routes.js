const express = require("express");
const savedServiceCtrl = require('../controllers/savedServices.controllers');
const router = express.Router();

//create saved service OK
router.post("/saved-services", savedServiceCtrl.createServiceSaved);

// get a service OK
router.get("/saved-services/:userId", savedServiceCtrl.getSavedServicesByUserId);
///
router.get("/saved-services2/:userId", savedServiceCtrl.getSavedServicesByUserId2);

router.get("/saved-servicesIdList/:userId", savedServiceCtrl.getSavedServiceIdList);

// delete a service OK
router.delete("/saved-services/:savedServiceId", savedServiceCtrl.deleteServiceSaved);

router.delete("/saved-services/:id_usuario/:id_servicio", savedServiceCtrl.deleteServiceSaved2);


module.exports = router;