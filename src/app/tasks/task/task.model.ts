export interface TaskData {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

export type NewTaskData = Omit<TaskData, "id" | "userId">;

