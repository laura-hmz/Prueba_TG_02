const cloudinary = require('../../cloudinaryConfig'); // Importa la configuración de Cloudinary
const Image = require('../models/imageModel'); // Importa el modelo de datos de imágenes

// Controlador para subir una imagen
const subirImagen = async (req, res) => {
  try {

    const resultadoSubida = await cloudinary.uploader.upload(req.file.path);
    console.log('public_id',resultadoSubida.public_id)
    // Crea un nuevo documento de imagen en MongoDB
    const nuevaImagen = new Image({
      url: resultadoSubida.secure_url, // La URL de Cloudinary
      servicioId: req.body.servicioId, // ID del servicio relacionado
      public_id: resultadoSubida.public_id, // ID de la imagen en Cloudinary
    });

    // Guarda la imagen en la base de datos
    const imagenGuardada = await nuevaImagen.save();
    console.log('Imagen guardada', imagenGuardada);
    res.json(imagenGuardada);

  } catch (error) {
    res.status(500).json({ message: error.message  });
  }
};

// Controlador para obtener imágenes por servicio
const obtenerImagenesPorServicio = async (req, res) => {
  const { servicioId } = req.params;

  try {
    const imagenes = await Image.find({ servicioId });

    res.json(imagenes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las imágenes' });
  }
};

// Controlador para eliminar una imagen
const eliminarImagen = async (req, res) => {
  const { imagenId } = req.params;
  console.log(imagenId)

  try {
    // Elimina la imagen de Cloudinary
    const imagen = await Image.findById(imagenId);
    console.log('imagen qla',imagen)
    await cloudinary.uploader.destroy(imagen.public_id);

    // Elimina el documento de imagen de la base de datos
    await Image.findByIdAndRemove(imagenId);

    res.json({ message: 'Imagen eliminada con éxito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la imagen' });
  }
};

module.exports = {
  subirImagen,
  obtenerImagenesPorServicio,
  eliminarImagen,
};
