import { Router } from "express";
import actionBrand2Controller from "../controllers/brand2.controller.js";


const router = Router();
const roat = {
    def : "/brands2",
    defID : "/brands2/:id"
}

router.get(roat.def,actionBrand2Controller.getBrands2);
router.get(roat.defID,actionBrand2Controller.getOneBrand2);
router.post(roat.def,actionBrand2Controller.createBrand2);
router.patch(roat.defID,actionBrand2Controller.updateBrand2);
router.delete(roat.defID,actionBrand2Controller.deleteBrand2);

export default router