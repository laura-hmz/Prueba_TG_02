const express = require('express');
const imageController = require('../controllers/image.controller'); // Importa el controlador de imágenes
const router = express.Router();
const { upload } = require('../middlewares/multer'); 

// Rutas para la gestión de imágenes
router.post('/subir-imagen', upload.single('imagen'), imageController.subirImagen);
router.get('/obtener-imagenes/:servicioId', imageController.obtenerImagenesPorServicio); // Ruta para obtener imágenes por servicio
router.delete('/eliminar-imagen/:imagenId', imageController.eliminarImagen); // Ruta para eliminar una imagen

module.exports = router; 
   