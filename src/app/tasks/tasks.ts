import { Component, Input, signal, WritableSignal } from '@angular/core';
import { Task } from './task/task';
import { type TaskData } from './task/task.model';
import { type UserData } from "../user/user.model";
import { NewTask } from "./new-task/new-task";

@Component({
  selector: 'app-tasks',
  imports: [NewTask, Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  @Input({required: true}) user!: UserData;
  tasks = signal<Record<string, Array<TaskData>>>({});
  addingTask: WritableSignal<boolean> = signal<boolean>(false);

  get selectedUserTasks() {
    return this.tasks()[this.user.id];
  }

  onStartAddTask(): void {
    this.addingTask.set(true);
  }

  onAddTask(task: TaskData) {
    this.tasks.update((tasks) => ({
      ...tasks,
      [this.user.id]: [...tasks[this.user.id] ?? [], task]
    }));
    this.addingTask.set(false);
  }

  onCancelAddTask() {
    this.addingTask.set(false);
  }

  onCompleteTask(task: TaskData): void {
    this.tasks.update((tasks) => ({
      ...tasks,
      [task.userId]: tasks[task.userId].filter(({ id }) => id !== task.id)
    }));
  }
}
