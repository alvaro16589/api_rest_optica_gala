import { Router } from "express";
import actionItemController from "../controllers/item.controller.js";


const router = Router();
const roat = {
    def : "/items",
    defID : "/items/:id"
}

router.get(roat.def,actionItemController.getItems);
router.get(roat.defID,actionItemController.getOneItem);
router.post(roat.def,actionItemController.createItem);
router.patch(roat.defID,actionItemController.updateItem);
router.delete(roat.defID,actionItemController.deleteItem);

export default router