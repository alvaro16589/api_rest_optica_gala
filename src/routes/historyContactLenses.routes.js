import { Router } from "express";
import actionHistoryContactLensesController from "../controllers/historyContactLenses.controller.js";


const router = Router();
const roat = {
    def : "/historycontactlenses",
    defID : "/historycontactlenses/:id"
}

router.get(roat.def,actionHistoryContactLensesController.getHistoryOfContactLensesQuantity);
router.get(roat.defID,actionHistoryContactLensesController.getOneHistoryOfContactLensesQuantityByidContactLenses);
router.post(roat.def,actionHistoryContactLensesController.createHistoryOfContactLensesQuantity);
router.patch(roat.defID,actionHistoryContactLensesController.updateHistoryOfContactLensesQuantity);
router.delete(roat.defID,actionHistoryContactLensesController.deleteHistoryOfContactLensesQuantity);

export default router
