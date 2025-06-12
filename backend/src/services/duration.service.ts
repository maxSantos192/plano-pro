import { CreateDurationDTO } from "../dto/duration.dto";
import prisma from "../lib/prisma";

export class DurationService {
  async create(data: CreateDurationDTO) {
    const duration = await prisma.duration.create({
      data,
    });
    return duration;
  }

  async findAll() {
    const durations = await prisma.duration.findMany({
      orderBy: { name: "asc" },
    });
    return durations;
  }
}
