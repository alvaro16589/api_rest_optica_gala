import { Router } from "express";
import actionShapeController from "../controllers/shape.controller.js";


const router = Router();
const roat = {
    def : "/shapes",
    defID : "/shapes/:id"
}

router.get(roat.def,actionShapeController.getShapes);
router.get(roat.defID,actionShapeController.getOneShape);
router.post(roat.def,actionShapeController.createShape);
router.patch(roat.defID,actionShapeController.updateShape);
router.delete(roat.defID,actionShapeController.deleteShape);

export default router