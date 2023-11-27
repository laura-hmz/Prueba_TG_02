const mongoose = require("mongoose");
const removeAccents = require('remove-accents');
const moment = require('moment-timezone');

const horarioSchema = mongoose.Schema({
    dia_semana: { type: String, required: true },
    hora_de_inicio: { type: Number, required: true },
    hora_de_finalizacion: { type: Number, required: true }
});

const caracteristicaSchema = mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: {String} // Puedes agregar más propiedades aquí según tus necesidades
});

const serviceSchema = mongoose.Schema({
  id_usuario: {
      type: mongoose.Types.ObjectId,
      required: true
  },
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
  },
  horarios: {
      type: [horarioSchema],
      required: false
  },
  
  tipo_servicio: {
      type: String,
      required: true
  },
  estado: {
      type: Number,
      required: true
  },
  area_0: {
      type: String,
      required: false
  },
  tipo_habitacion_1: {
      type: String,
      required: false
  },
  caracteristicas_habitacion_1: {
      type: [caracteristicaSchema],
      required: false
  },
  tipo_vehiculo_2: {
      type: String,
      required: false
  },
  area_otro_servicio_3: {
      type: String,
      required: false
  },
  precio: {
    type: Number
  },
  imagenPortada: {
    url: { type: String, required: false }, // URL de la imagen
    public_id: { type: String, required: false },
    title: { type: String, required: false } // Public ID de la imagen en Cloudinary
  }
},
{
    timestamps: {
        currentTime: () => moment().tz('America/Bogota').toDate(),
      },
}
);

serviceSchema.pre('save', function (next) {
    this.nombre = removeAccents(this.nombre.toLowerCase());
    next();
  });

module.exports = mongoose.model('Service', serviceSchema);