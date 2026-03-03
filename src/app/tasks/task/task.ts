import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type TaskData } from './task.model';
import { Card } from "../../shared/card/card";

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  @Input({required: true}) task!: TaskData;
  @Output() complete = new EventEmitter<TaskData>();

  onCompleteTask(): void {
    this.complete.emit(this.task);
  }
}