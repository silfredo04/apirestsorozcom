import { Router } from "express";
import {obtenerEmpleados,crearEmpleados,actualizarEmpleados,eliminarEmpleados,obtenerUnEmpleado} from "../controlador/employees.Controllers.js";


const router = Router();

router.get('/empleado/get',obtenerEmpleados)

router.get('/empleado/uno/:id',obtenerUnEmpleado)

router.post('/empleado/post',crearEmpleados)

router.patch('/empleado/patch/:id',actualizarEmpleados)

router.put('/empleado/delete/:id',eliminarEmpleados)

export default router