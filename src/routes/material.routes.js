import { Router } from "express";
import actionMaterialController from "../controllers/material.controller.js";


const router = Router();
const roat = {
    def : "/materials",
    defID : "/materials/:id"
}

router.get(roat.def,actionMaterialController.getMaterials);
router.get(roat.defID,actionMaterialController.getOneMaterial);
router.post(roat.def,actionMaterialController.createMaterial);
router.patch(roat.defID,actionMaterialController.updateMaterial);
router.delete(roat.defID,actionMaterialController.deleteMaterial);

export default router