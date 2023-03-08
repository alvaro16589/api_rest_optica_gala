import { Router } from "express";
import actionColorController from "../controllers/color.controller.js";


const router = Router();
const roat = {
    def : "/colors",
    defID : "/colors/:id"
}

router.get(roat.def,actionColorController.getColors);
router.get(roat.defID,actionColorController.getOneColor);
router.post(roat.def,actionColorController.createColor);
router.patch(roat.defID,actionColorController.updateColor);
router.delete(roat.defID,actionColorController.deleteColor);

export default router