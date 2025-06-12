import { Router } from "express";
import { classPlanRoutes } from "./class-plan.routes";
import { gradeRoutes } from "./grade.route";
import { durationRoutes } from "./duration.routes";

const router = Router();

router.use("/grades", gradeRoutes);
router.use("/durations", durationRoutes);

export { router };
