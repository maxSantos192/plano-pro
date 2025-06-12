import { Router } from "express";
import { classPlanRoutes } from "./class-plan.routes";
import { gradeRoutes } from "./grade.route";
import { durationRoutes } from "./duration.routes";
import { subjectRoutes } from "./subject.routes";

const router = Router();

router.use("/grades", gradeRoutes);
router.use("/durations", durationRoutes);
router.use("/subjects", subjectRoutes);

export { router };
