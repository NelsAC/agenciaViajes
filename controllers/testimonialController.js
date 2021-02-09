const guardarTestimonial = (req, res) => {
  //validar que los campos no esten vacios
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
    //mostrar la vista con errores
    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre, correo, mensaje
    });
  }
};
export { guardarTestimonial };
