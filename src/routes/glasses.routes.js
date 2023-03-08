import { Router } from "express";
import actionGlassesController from "../controllers/glasses.controller.js";


const router = Router();
const roat = {
    def : "/glasses",
    defID : "/glasses/:id"
}

router.get(roat.def,actionGlassesController.getGlasses);
router.get(roat.defID,actionGlassesController.getOneGlasses);
router.post(roat.def,actionGlassesController.createGlasses);
router.patch(roat.defID,actionGlassesController.updateGlasses);
router.delete(roat.defID,actionGlassesController.deleteGlasses);

export default router