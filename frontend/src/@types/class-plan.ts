import { Dayjs } from "dayjs";

export interface ClassPlan {
  title: string;
  subjectId: number;
  gradeId: number;
  durationId: number;
  date: Dayjs;
  objectives: string;
  content: string;
  methodology: string;
  resources: string;
  evaluation: string;
}
