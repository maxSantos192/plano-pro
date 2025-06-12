import { Router } from "express";
import { SubjectController } from "../controller/subject.controller";

const route = Router();
const subjectController = new SubjectController();

route.post("/", subjectController.create);
route.get("/", subjectController.findAll);

export { route as subjectRoutes };
