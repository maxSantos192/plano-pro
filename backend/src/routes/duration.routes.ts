import { Router } from "express";
import { DurationController } from "../controller/duration.controller";

const router = Router();
const durationController = new DurationController();

router.post("/", durationController.create);
router.get("/", durationController.findAll);

export { router as durationRoutes };
