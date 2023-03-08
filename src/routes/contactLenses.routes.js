import { Router } from "express";
import actionContactLensesController from "../controllers/contactLenses.controller.js";


const router = Router();
const roat = {
    def : "/contactlenses",
    defID : "/contactlenses/:id"
}

router.get(roat.def,actionContactLensesController.getContactLenses);
router.get(roat.defID,actionContactLensesController.getOneContactLenses);
router.post(roat.def,actionContactLensesController.createContactLenses);
router.patch(roat.defID,actionContactLensesController.updateContactLenses);
router.delete(roat.defID,actionContactLensesController.deleteContactLenses);

export default router