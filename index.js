//const express = require("express"); //commonjs
import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

//conectar la base de Datos
db.authenticate()
  .then(() => console.log("base de datos conectada"))
  .catch((error) => console.log(error));

//definir puerto
const port = process.env.PORT || 4000;

//habilitar pug
app.set("view engine", "pug");

//creando un propio middleware para obtener el año actual
app.use((req, res, next) => {
  res.locals.añoActual = new Date().getFullYear();
  res.locals.nombreSitio = "Agencia de Viajes";
  next(); // o return next()
});

//
app.use(express.urlencoded({ extended: true }));

//definir la arpet pública
app.use(express.static("public"));

//agregar router
app.use("/", router);

app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port}`);
});
