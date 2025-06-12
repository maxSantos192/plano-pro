import { Request, Response } from "express";
import { GradeService } from "../services/grade.service";
import { CreateGradeDto } from "../dto/grade.dto";
import { ApiResponse } from "../@types";

export class GradeController {
  private gradeService: GradeService;

  constructor() {
    this.gradeService = new GradeService();
  }

  create = async (req: Request, res: Response) => {
    try {
      const validatedData = req.body as CreateGradeDto;
      const grade = await this.gradeService.create(validatedData);

      const response: ApiResponse = {
        success: true,
        data: grade,
        message: "Grade created successfully",
      };

      res.status(201).json(response);
    } catch (error: any) {
      const response: ApiResponse = {
        success: false,
        error: error.message || "An error occurred while creating the grade",
      };

      res.status(400).json(response);
    }
  };
}
