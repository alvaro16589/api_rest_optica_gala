import { Router } from "express";
import actionGenderController from "../controllers/gender.controller.js";


const router = Router();
const roat = {
    def : "/genders",
    defID : "/genders/:id"
}

router.get(roat.def,actionGenderController.getGenders);
router.get(roat.defID,actionGenderController.getOneGender);
router.post(roat.def,actionGenderController.createGender);
router.patch(roat.defID,actionGenderController.updateGender);
router.delete(roat.defID,actionGenderController.deleteGender);

export default router