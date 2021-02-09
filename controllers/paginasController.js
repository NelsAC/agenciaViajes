import Viaje from "../models/Viaje.js";

const pagInicio = (req, res) => {
  res.render("inicio", {
    pagina: "Inicio",
  });
};
const pagNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
  });
};
const pagViajes = async (req, res) => {
  //Consultar BD
  const viajes = await Viaje.findAll();

  res.render("viajes", {
    pagina: "Próximos Viajes",
    viajes,
  });
};
const pagDetalleViaje = async (req, res) => {
  const { slug } = req.params;
  try {
    const viaje = await Viaje.findOne({ where: { slug } });
    res.render("viaje", {
      pagina: "Información Viaje",
      viaje,
    });
  } catch (error) {
    console.log(error);
  }
};
const pagTestimoniales = (req, res) => {
  res.render("testimoniales", {
    pagina: "Testimoniales",
  });
};

export { pagInicio, pagNosotros, pagViajes, pagTestimoniales, pagDetalleViaje };
