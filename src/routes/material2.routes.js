import { Router } from "express";
import actionMaterial2Controller from "../controllers/material2.controller.js";


const router = Router();
const roat = {
    def : "/materials2",
    defID : "/materials2/:id"
}

router.get(roat.def,actionMaterial2Controller.getMaterials2);
router.get(roat.defID,actionMaterial2Controller.getOneMaterial2);
router.post(roat.def,actionMaterial2Controller.createMaterial2);
router.patch(roat.defID,actionMaterial2Controller.updateMaterial2);
router.delete(roat.defID,actionMaterial2Controller.deleteMaterial2);

export default router