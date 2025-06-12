import { CreateClassPlanDTO } from "../dto/class-plan.dto";
import prisma from "../lib/prisma";

export class ClassPlanService {
  async create(data: CreateClassPlanDTO) {
    const classPlan = await prisma.classPlan.create({
      data: {
        ...data,
        date: new Date(data.date),
      },
      // include: {
      //   subject: true,
      //   grade: true,
      //   duration: true,
      //   document: true,
      // },
    });
    return classPlan;
  }

  async findAll() {
    const classPlans = await prisma.classPlan.findMany({
      include: {
        subject: true,
        grade: true,
        duration: true,
        document: true,
      },
    });
    return classPlans;
  }
}
