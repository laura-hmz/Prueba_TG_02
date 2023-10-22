const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  url: String, // Almacena la URL de la imagen en Cloudinary
  servicioId: {
        type: mongoose.Types.ObjectId,
        required: true
    }, // Almacena el ID del servicio al que pertenece la imagen
    public_id:{ 
        type: String,
        required: true}, // Almacena el ID de la imagen en Cloudinary
},
{
    timestamps: true
});

module.exports = mongoose.model('Image', imageSchema);
