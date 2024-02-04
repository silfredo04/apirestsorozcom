import {Router} from "express";
import {ping} from "../controlador/index.Controllers.js";
const router = Router();


router.get('/ping',ping)



export default router