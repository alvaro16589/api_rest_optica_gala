import { Router } from "express";
import actionTelephoneController from "../controllers/telephone.controller.js";


const router = Router();
const roat = {
    def : "/telephones",
    defId : "/telephones/:id"
}

router.get(roat.def,actionTelephoneController.getTelephones);
router.get(roat.defId,actionTelephoneController.getSomeoneTelephones);
router.post(roat.def,actionTelephoneController.createTelephone);
router.patch(roat.defId,actionTelephoneController.updateTelephone);
router.delete(roat.defId,actionTelephoneController.deleteTelephone);

export default router