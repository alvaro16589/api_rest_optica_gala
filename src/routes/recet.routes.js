import { Router } from "express";
import actionRecetController from "../controllers/recet.controller.js";


const router = Router();
const roat = {
    def : "/recets",
    defID : "/recets/:id"
}

router.get(roat.def,actionRecetController.getRecets);
router.get(roat.defID,actionRecetController.getRecet);
router.post(roat.def,actionRecetController.createRecet);
router.patch(roat.defID,actionRecetController.updateRecet);
router.delete(roat.defID,actionRecetController.deleteRecet);

export default router