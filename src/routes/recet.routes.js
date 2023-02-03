import { Router } from "express";
import actionRecetController from "../controllers/recet.controller.js";


const router = Router();
const roat = {
    def : "/recets",
    defID : "/recets/:id"
}

router.get(roat.def,actionRecetController.getRecets);

export default router