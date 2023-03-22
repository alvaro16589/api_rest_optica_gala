import { Router } from "express";
import actionKindController from "../controllers/kind.controller.js";


const router = Router();
const roat = {
    def : "/kinds",
    defID : "/kinds/:id"
}

router.get(roat.def,actionKindController.getKinds);
router.get(roat.defID,actionKindController.getOneKind);
router.post(roat.def,actionKindController.createKind);
router.patch(roat.defID,actionKindController.updateKind);
router.delete(roat.defID,actionKindController.deleteKind);

export default router