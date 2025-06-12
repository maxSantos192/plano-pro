import { Request, Response } from "express";
import { DurationService } from "../services/duration.service";
import { CreateDurationDTO } from "../dto/duration.dto";

export class DurationController {
  private durationService: DurationService;

  constructor() {
    this.durationService = new DurationService();
  }

  create = async (req: Request, res: Response) => {
    try {
      const validatedData = req.body as CreateDurationDTO;
      const duration = await this.durationService.create(validatedData);

      const response = {
        success: true,
        data: duration,
        message: "Duration created successfully",
      };

      res.status(201).json(response);
    } catch (error: any) {
      const response = {
        success: false,
        error: error.message || "An error occurred while creating the duration",
      };

      res.status(400).json(response);
    }
  };

  findAll = async (req: Request, res: Response) => {
    try {
      const durations = await this.durationService.findAll();

      const response = {
        success: true,
        data: durations,
        message: "Durations retrieved successfully",
      };

      res.status(200).json(response);
    } catch (error: any) {
      const response = {
        success: false,
        error: error.message || "An error occurred while retrieving durations",
      };

      res.status(400).json(response);
    }
  };
}
