import { Component, Input, signal, WritableSignal } from '@angular/core';
import { TasksService } from './tasks.service';
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

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user.id);
  }

  onStartAddTask(): void {
    this.addingTask.set(true);
  }

  onCloseAddTask() {
    this.addingTask.set(false);
  }
}
