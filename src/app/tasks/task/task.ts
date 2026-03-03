import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type TaskData } from './task.model';
import { Card } from "../../shared/card/card";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input({required: true}) task!: TaskData;

  constructor(private tasksService: TasksService) {}

  onCompleteTask(): void {
    this.tasksService.removeTask(this.task);
  }
}