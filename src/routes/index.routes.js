import { Router } from "express";
import clientC from "../controllers/clientController.js";
const router = Router()
router.get('/clients/list',clientC.list)

export default router