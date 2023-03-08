import { Router } from "express";
import actionTypologyController from "../controllers/typology.controller.js";


const router = Router();
const roat = {
    def : "/typologys",
    defId : "/typologys/:id"
}

router.get(roat.def,actionTypologyController.getTypologys);
router.get(roat.defId,actionTypologyController.getSomeoneTypology);
router.post(roat.def,actionTypologyController.createTypology);
router.patch(roat.defId,actionTypologyController.updateTypology);
router.delete(roat.defId,actionTypologyController.deleteTypology);

export default router