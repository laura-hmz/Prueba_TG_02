const serviceSchema = require("../models/service");
const savedServicesSchema = require("../models/savedServices");
const Image = require('../models/imageModel');
const cloudinary = require('../../cloudinaryConfig');

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
// const deleteService2 = async (req, res) => {
//   const { id } = req.params;

//   serviceSchema
//     .deleteOne({ _id: id })
//     .then((data) => res.json(data))
//     .catch((error) => res.json({ message: error }));
// }

const deleteService = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await serviceSchema.findById(id);
    if (!service) {
      return res.status(404).json({ message: "Servicio no encontrado" });
    }

    const serviceImages = await Image.find({ servicioId: id });
    for (const image of serviceImages) {
      const imagen = await Image.findById(image._id);
      await cloudinary.uploader.destroy(imagen.public_id);
      await Image.findByIdAndRemove(image._id);
    }

    const serviceSavedServices = await savedServicesSchema.find({ id_servicio: id });
    for (const savedService of serviceSavedServices) {
      await savedServicesSchema.findByIdAndDelete(savedService._id);
    }

    // Elimina el servicio principal
    const result = await serviceSchema.deleteOne({ _id: id });
    if (!result) {
      return res.status(404).json({ message: "Error al eliminar el servicio" });
    }

    res.json({ message: "Servicio eliminado con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const updateService = async (req, res) => {
  const { id } = req.params;
  const { id_usuario, nombre,descripcion,horarios,tipo_servicio,estado,
    area_0,tipo_habitacion_1,caracteristicas_habitacion_1,tipo_vehiculo_2,area_otro_servicio_3,precio} = req.body;
  serviceSchema
    .updateOne({ _id: id }, { $set: {id_usuario,nombre,descripcion,horarios,tipo_servicio,estado,area_0,
      tipo_habitacion_1,caracteristicas_habitacion_1,tipo_vehiculo_2,area_otro_servicio_3,precio} })
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
  try {
    const { id } = req.params; //  usuario a excluir
    console.log(req.body)
    const services = await serviceSchema
      .find({ id_usuario: { $ne: id } }) // Excluye servicios del usuario específico
      .sort({ createdAt: -1 }) // Ordenar por createdAt en orden descendente
      .limit(8) // Limitar a un máximo
      .exec();

    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
const updateServiceImage = async (req, res) => {
  const { id } = req.params;
  //const { newImagenPortada } = req.file;
  //console.log(req.file)
  //console.log(id)
  //console.log(req.params)

  try {
    // Consulta el servicio actual para obtener la imagen actual, si existe.
    const existingService = await serviceSchema.findOne({ _id: id });

    if (existingService) {
      // Verifica si el servicio tenía una imagen en Cloudinary.
      if (existingService.imagenPortada && existingService.imagenPortada.public_id) {
        // Utiliza Cloudinary para eliminar la imagen anterior.
        await cloudinary.uploader.destroy(existingService.imagenPortada.public_id);
      }
    }

    // Sube la nueva imagen a Cloudinary y obtiene el resultado.
    const resultadoSubida = await cloudinary.uploader.upload(req.file.path);

    // Actualiza el campo imagenPortada en el servicio con la nueva información.
    existingService.imagenPortada = {
      url: resultadoSubida.secure_url,
      public_id: resultadoSubida.public_id,
      title: req.file.originalname
    };

    // Guarda la actualización en la base de datos.
    await existingService.save();

    res.json({ message: 'Imagen actualizada con éxito' });
  } catch (error) {
    console.error('Error al actualizar la imagen:', error);
    res.status(500).json({ message: 'Error al actualizar la imagen' });
  }
};




module.exports = {
    createService, getServices, getServiceId, deleteService, 
    updateServiceImage, updateService, listServicesIdUser, lastServicesAdded
}