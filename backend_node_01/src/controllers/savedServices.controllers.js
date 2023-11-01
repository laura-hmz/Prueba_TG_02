const savedServicesSchema = require("../models/savedServices");
const serviceSchema = require("../models/service");

const createServiceSaved = async (req, res) => {
    console.log('createServiceSaved',req.body);
    const service = savedServicesSchema(req.body);
    service
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
}


const deleteServiceSaved = async (req, res) => {
    try {
        const { savedServiceId } = req.params;
        const result = await savedServicesSchema.findByIdAndDelete(savedServiceId);
        if (!result) {
            return res.status(404).json({ message: "Servicio guardado no encontrado" });
        }
        res.json({ message: "Servicio guardado eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getSavedServicesByUserId2 = async (req, res) => {
    try {
        const { userId } = req.params;
        const savedServices = await savedServicesSchema.find({ id_usuario: userId });
        res.json(savedServices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getSavedServiceIdList = async (req, res) => {
    try {
        const { userId } = req.params;
        const savedServices = await savedServicesSchema.find({ id_usuario: userId });

        // Extraer solo los IDs de los servicios guardados
        const savedServiceIds = savedServices.map(service => service.id_servicio);

        res.json(savedServiceIds);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const getSavedServicesByUserId = async (req, res) => {
    try {
        const { userId } = req.params;
        const savedServices = await savedServicesSchema.find({ id_usuario: userId });

        // Crear un array para almacenar los servicios con detalles
        const servicesWithDetails = [];

        // Iterar sobre los servicios guardados y obtener los detalles de cada servicio
        for (const savedService of savedServices) {
            const serviceDetails = await serviceSchema.findById(savedService.id_servicio);
            if (serviceDetails) {
                servicesWithDetails.push(serviceDetails);
            }
        }

        res.json(servicesWithDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log('probablemente el usuario no existe')
    }
}


const deleteServiceSaved2 = async (req, res) => {
    try {
        const { id_usuario, id_servicio } = req.params; // Cambiar a req.params
        // Buscar y eliminar el servicio guardado con ambos identificadores
        const result = await savedServicesSchema.findOneAndDelete({ id_usuario, id_servicio });
        if (!result) {
            return res.status(404).json({ message: "Servicio guardado no encontrado" });
        }
        res.json({ message: "Saved-service eliminado exitosamente" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    createServiceSaved, deleteServiceSaved, getSavedServicesByUserId,deleteServiceSaved2, 
    getSavedServicesByUserId2, getSavedServiceIdList
}