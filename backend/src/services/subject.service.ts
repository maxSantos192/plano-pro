import { CreateSubjectDTO } from "../dto/subject.dto";
import prisma from "../lib/prisma";

export class SubjectService {
  async create(data: CreateSubjectDTO) {
    const subject = await prisma.subject.create({
      data,
    });
    return subject;
  }

  async findAll() {
    const subjects = await prisma.subject.findMany({
      orderBy: { name: "asc" },
    });
    return subjects;
  }
}
