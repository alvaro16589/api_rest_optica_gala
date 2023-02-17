import { Router } from "express";
import actionCustomerController from "../controllers/customers.controller.js";


const router = Router();
const roat = {
    def : "/customers",
    defID : "/customers/:id"
}

router.get(roat.def,actionCustomerController.getCustomers);
router.get(roat.defID,actionCustomerController.getOneCustomer);
router.post(roat.def,actionCustomerController.createCustomer);
router.patch(roat.defID,actionCustomerController.updateCustomer);
router.delete(roat.defID,actionCustomerController.deleteCustomer);

export default router
