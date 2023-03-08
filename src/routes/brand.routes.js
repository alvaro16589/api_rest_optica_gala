import { Router } from "express";
import actionBrandController from "../controllers/brand.controller.js";


const router = Router();
const roat = {
    def : "/brands",
    defID : "/brands/:id"
}

router.get(roat.def,actionBrandController.getBrands);
router.get(roat.defID,actionBrandController.getOneBrand);
router.post(roat.def,actionBrandController.createBrand);
router.patch(roat.defID,actionBrandController.updateBrand);
router.delete(roat.defID,actionBrandController.deleteBrand);

export default router