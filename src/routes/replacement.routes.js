import { Router } from "express";
import actionReplacementController from "../controllers/replacement.controller.js";


const router = Router();
const roat = {
    def : "/replacements",
    defID : "/replacements/:id"
}

router.get(roat.def,actionReplacementController.getReplacements);
router.get(roat.defID,actionReplacementController.getOneReplacement);
router.post(roat.def,actionReplacementController.createReplacement);
router.patch(roat.defID,actionReplacementController.updateReplacement);
router.delete(roat.defID,actionReplacementController.deleteReplacement);

export default router