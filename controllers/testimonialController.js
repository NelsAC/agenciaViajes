import Testimoniales from "../models/Testimoniales.js";
const guardarTestimonial = async (req, res) => {
  //validar que los campos no esten vacios
  //express-validator, dependencia para validar formularios
  let errores = [];
  const { nombre, correo, mensaje } = req.body;
  if (nombre.trim() === "") {
    errores.push({ msj: "El campo nombre está vacío" });
  }
  if (correo.trim() === "") {
    errores.push({ msj: "El campo correo está vacío" });
  }
  if (mensaje.trim() === "") {
    errores.push({ msj: "El campo mensaje está vacío" });
  }
  if (errores.length > 0) {
    const testimoniales = await Testimoniales.findAll();
    //mostrar la vista con errores
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
      testimoniales,
    });
  } else {
    //almacenar en la base de datos
    try {
      await Testimoniales.create({
        nombre,
        correo,
        mensaje,
      });
      res.redirect("/testimoniales");
    } catch (error) {
      console.log(error);
    }
  }
};
export { guardarTestimonial };
