import { Router } from "express";
import actionHistoryGlassesController from "../controllers/historyGlasses.controller.js";


const router = Router();
const roat = {
    def : "/historyglasses",
    defID : "/historyglasses/:id"
}

router.get(roat.def,actionHistoryGlassesController.getHistoryOfGlassesQuantity);
router.get(roat.defID,actionHistoryGlassesController.getOneHistoryOfGlassesQuantityByIDGlasses);
router.post(roat.def,actionHistoryGlassesController.createHistoryOfGlassesQuantity);
router.patch(roat.defID,actionHistoryGlassesController.updateHistoryOfGlassesQuantity);
router.delete(roat.defID,actionHistoryGlassesController.deleteHistoryOfGlassesQuantity);

export default router
