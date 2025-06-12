import { CreateGradeDto } from "../dto/grade.dto";
import prisma from "../lib/prisma";

export class GradeService {
  async create(data: CreateGradeDto) {
    const grade = await prisma.grade.create({
      data,
    });
    return grade;
  }
}
