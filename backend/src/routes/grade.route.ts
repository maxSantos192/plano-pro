import { Router } from "express";
import { GradeController } from "../controller/grade.controller";

const router = Router();
const gradeController = new GradeController();

router.post("/", gradeController.create);

export { router as gradeRoutes };
