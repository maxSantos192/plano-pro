import { CreateClassPlanDTO } from "./../dto/class-plan.dto";
import { Request, Response } from "express";
import { ClassPlanService } from "../services/class-plan.service";
import { ApiResponse } from "../@types";

export class ClassPlanController {
  private classPlanService: ClassPlanService;

  constructor() {
    this.classPlanService = new ClassPlanService();
  }

  create = async (req: Request, res: Response) => {
    try {
      const validatedData = req.body as CreateClassPlanDTO;
      const classPlan = await this.classPlanService.create(validatedData);

      const response: ApiResponse = {
        success: true,
        data: classPlan,
        message: "Class plan created successfully",
      };

      res.status(201).json(response);
    } catch (error: any) {
      const response: ApiResponse = {
        success: false,
        error:
          error.message || "An error occurred while creating the class plan",
      };

      res.status(400).json(response);
    }
  };

  findAll = async (req: Request, res: Response) => {
    try {
      const classPlans = await this.classPlanService.findAll();

      const response: ApiResponse = {
        success: true,
        data: classPlans,
        message: "Class plans retrieved successfully",
      };

      res.status(200).json(response);
    } catch (error: any) {
      const response: ApiResponse = {
        success: false,
        error:
          error.message || "An error occurred while retrieving class plans",
      };

      res.status(400).json(response);
    }
  };
}
