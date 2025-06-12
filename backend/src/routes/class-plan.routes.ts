import { Router } from "express";
import { ClassPlanController } from "../controller/class-plan.controller";

const router = Router();
const classPlanController = new ClassPlanController();

router.post("/", classPlanController.create);
router.get("/", classPlanController.findAll);

export { router as classPlanRoutes };
