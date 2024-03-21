import { Router } from "express";
import clientC from "../controllers/clientController.js";
import inventoryC from "../controllers/inventoryController.js";
import salesC from "../controllers/salesController.js";
import shoppingC from "../controllers/shoppingController.js";


const router = Router()
router.get('/clients/list',clientC.list)
router.get('/inventory/list',inventoryC.list)
router.get('/shopping/list',shoppingC.list)
router.get('/sales/list',salesC.list)


export default router