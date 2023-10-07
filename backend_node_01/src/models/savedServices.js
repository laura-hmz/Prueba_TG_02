const mongoose = require("mongoose");
const savedServicesSchema = mongoose.Schema({
    id_usuario: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    id_servicio: {
        type: mongoose.Types.ObjectId,
        required: true
    }
  },
  {
      timestamps: true
  }
  );
  
  
  module.exports = mongoose.model('SavedServices', savedServicesSchema);