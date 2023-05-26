import { Router } from "express";
import actionRecetGlassesController from "../controllers/recetGlasses.controller.js";


const router = Router();
const roat = {
    def : "/recetglasses",
    defID : "/recetglasses/:id"
}

router.get(roat.def,actionRecetGlassesController.getAllRecetGlasses);
router.get(roat.defID,actionRecetGlassesController.getRecetGlasses);
router.post(roat.def,actionRecetGlassesController.createRecetGlasses);
router.patch(roat.defID,actionRecetGlassesController.updateRecetGlasses);
router.delete(roat.defID,actionRecetGlassesController.deleteRecetGlasses);

export default router