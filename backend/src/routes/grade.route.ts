import { Router } from "express";
import { GradeController } from "../controller/grade.controller";

const router = Router();
const gradeController = new GradeController();

router.post("/", gradeController.create);
router.get("/", gradeController.findAll);

export { router as gradeRoutes };
