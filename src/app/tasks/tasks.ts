import { Component, Input, Output, signal } from '@angular/core';
import { Temporal } from '@js-temporal/polyfill';
import { dummyTasks } from './dummy-tasks';
import { Task } from './task/task';
import { type TaskData } from './task/task.model';
import { type UserData } from "../user/user.model";
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  @Input({required: true}) user!: UserData;
  tasks = signal<Record<string, Array<TaskData>>>({});
  private _serial: bigint = 0n;

  get serial() {
    return this._serial++;
  }

  get selectedUserTasks() {
    return this.tasks()[this.user.id];
  }

  addTask(): void {
    this.tasks.update((tasks) => ({
      ...tasks,
      [this.user.id]: [
        ...tasks[this.user.id] ?? [],
        {
          id: `t${this.serial}`,
          userId: this.user.id,
          title: 'Title',
          dueDate: Temporal.Now.plainDateISO().toString(),
          summary: 'Summary'
        }
      ]
    }));
  }
}
