import { Router } from "express";
import actionViewsController from "../controllers/views.controller.js";


const router = Router();

router.get('/allglasses',actionViewsController.getAllGlasses);
router.get('/allcontactLenses',actionViewsController.getAllContactLenses);

export default router