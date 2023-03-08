import { Router } from "express";
import actionModelController from "../controllers/model.controller.js";


const router = Router();
const roat = {
    def : "/models",
    defID : "/models/:id"
}

router.get(roat.def,actionModelController.getModels);
router.get(roat.defID,actionModelController.getOneModel);
router.post(roat.def,actionModelController.createModel);
router.patch(roat.defID,actionModelController.updateModel);
router.delete(roat.defID,actionModelController.deleteModel);

export default router