const express = require("express");
const mongoose = require("mongoose");
//require("dotenv").config();
const userRoute = require("./routes/user.routes");
const serviceRoute = require("./routes/service.routes");
const MONGODB_URI='mongodb://localhost:27017/Prueba_TG00'

// settings
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use("/api", userRoute, serviceRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API DE MIERDA");
});

// mongodb connection
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));

