import Viaje from "../models/Viaje.js";
import Testimoniales from "../models/Testimoniales.js";

const pagInicio = async (req, res) => {
  //consultar 3 viajes de nuestra BD
  try {
    const viajes = await Viaje.findAll({ limit: 3 });
    const testimoniales = await Testimoniales.findAll({ limit: 3 });
    res.render("inicio", {
      pagina: "Inicio",
      clase: "home",
      viajes,
      testimoniales,
    });
  } catch (error) {
    console.log(error);
  }
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
const pagTestimoniales = async (req, res) => {
  try {
    const testimoniales = await Testimoniales.findAll();
    res.render("testimoniales", {
      pagina: "Testimoniales",
      testimoniales,
    });
  } catch (error) {
    console.log(error);
  }
};

export { pagInicio, pagNosotros, pagViajes, pagTestimoniales, pagDetalleViaje };
