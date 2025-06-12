import { Request, Response } from "express";
import { SubjectService } from "../services/subject.service";
import { CreateSubjectDTO } from "../dto/subject.dto";

export class SubjectController {
  private subjectService: SubjectService;

  constructor() {
    this.subjectService = new SubjectService();
  }

  create = async (req: Request, res: Response) => {
    try {
      const validatedData = req.body as CreateSubjectDTO;
      const subject = await this.subjectService.create(validatedData);

      const response = {
        success: true,
        data: subject,
        message: "Subject created successfully",
      };

      res.status(201).json(response);
    } catch (error: any) {
      const response = {
        success: false,
        error: error.message || "An error occurred while creating the subject",
      };

      res.status(400).json(response);
    }
  };

  findAll = async (req: Request, res: Response) => {
    try {
      const subjects = await this.subjectService.findAll();

      const response = {
        success: true,
        data: subjects,
        message: "Subjects retrieved successfully",
      };

      res.status(200).json(response);
    } catch (error: any) {
      const response = {
        success: false,
        error: error.message || "An error occurred while retrieving subjects",
      };

      res.status(400).json(response);
    }
  };
}
