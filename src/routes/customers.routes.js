import { Router } from "express";
import actionCustomer from "../controllers/customers.controller.js";


const router = Router();
const roat = {
    def : "/customers",
    defID : "/customers/:id"
}

router.get(roat.def,actionCustomer.getCustomer);

export default router