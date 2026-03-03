import { Injectable } from '@angular/core';
import { type TaskData } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: Record<string, Array<TaskData>> = {}

  constructor() {
    const tasks: string | null = localStorage.getItem('tasks');
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string): Array<TaskData> {
    return this.tasks[userId] ?? [];
  }

  addTask(task: TaskData): void {
    if (task.userId in this.tasks) {
      this.tasks[task.userId].push(task);
    } else {
      this.tasks[task.userId] = [task];
    }
    this.saveTasks();
  }

  removeTask(task: TaskData) {
    const userId = task.userId;
    if (userId in this.tasks) {
      const userTasks =
        this.tasks[userId].filter(({ id }) => task.id !== id);
      if (userTasks.length > 0) {
        this.tasks[userId] = userTasks;
      } else {
        delete this.tasks[userId];
      }
    }
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}