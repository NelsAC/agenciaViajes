import express from "express";
import {
  pagInicio,
  pagNosotros,
  pagViajes,
  pagTestimoniales,
  pagDetalleViaje,
} from "../controllers/paginasController.js";
import { guardarTestimonial } from "../controllers/testimonialController.js";
const router = express.Router();
router.get("/", pagInicio);
router.get("/Nosotros", pagNosotros);
router.get("/Viajes", pagViajes);
router.get("/Viajes/:slug", pagDetalleViaje);
router.get("/Testimoniales", pagTestimoniales);
router.post("/Testimoniales", guardarTestimonial);
export default router;
