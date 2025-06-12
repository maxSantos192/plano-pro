import { Router } from "express";
import { classPlanRoutes } from "./class-plan.routes";
import { gradeRoutes } from "./grade.route";

const router = Router();

router.use("/grades", gradeRoutes);

export { router };
