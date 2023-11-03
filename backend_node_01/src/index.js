const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();
const cloudinaryConfig = require('../cloudinaryConfig'); 
const userRoute = require("./routes/user.routes");
const serviceRoute = require("./routes/service.routes");
const savedServicesRoute = require("./routes/savedServices.routes");
const imageRoute = require("./routes/image.routes");
//const MONGODB_URI='mongodb://localhost:27017/Prueba_TG00'

// settings
const app = express();
const port = process.env.PORT || 3000;

// configuarcion de cors
const corsOptions = {
  origin: ['http://127.0.0.1:5173','https://servicios-univalle.onrender.com', 'https://front-laura.vercel.app', 'http://localhost:8000'], // Reemplaza esto con tu origen específico
  optionsSuccessStatus: 200 // Algunos navegadores antiguos (IE11) pueden requerir esto
};
app.use(cors(corsOptions));

// Configuración de la ruta para obtener la configuración de Cloudinary
app.get('/cloudinary-config', (req, res) => {
  // Enviar la configuración de Cloudinary al frontend
  res.json(cloudinaryConfig);
});

// middlewares
app.use(express.json());
app.use("/api", userRoute, serviceRoute,savedServicesRoute,imageRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API DE MIERDA");
});

// mongodb connection
mongoose
  .connect(
    process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));

