const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  correo: {
      type: String,
      required: true
  },
  nombre: {
      type: String,
      required: true
  },
  sexo: {
      type: String,
      required: true
  },
  carrera: {
      type: String,
      required: true
  },
  semestre: {
      type: Number,
      required: true
  },
  ciudad_residencia: {
      type: String,
      required: true
  },
  edad: {
      type: Number,
      required: true
  },
  estado: {
      type: Number,
      required: true
  },
  puntuacion: {
      type: Number,
      required: true
  },
  resultados_encuesta: {
      type: [Number],
      required: true
  },
  resultados_encuesta_habitaciones: {
      type: [Number],
      required: true
      
  },
  resultados_encuesta_asesorias: {
      type: [Number],
      required: true
      
  },
  resultados_encuesta_transporte: {
      type: [Number],
      required: true
  }

},
{
    timestamps: true
}
);


module.exports = mongoose.model('User', userSchema);