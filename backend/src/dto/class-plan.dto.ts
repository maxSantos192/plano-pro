export interface CreateClassPlanDTO {
  title: string;
  subjectId: number;
  gradeId: number;
  durationId: number;
  date: string;
  objectives?: string;
  content?: string;
  methodology?: string;
  resources?: string;
  evaluation?: string;
  documentId?: string;
}
