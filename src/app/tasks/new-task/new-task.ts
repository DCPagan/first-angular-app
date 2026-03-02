import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserData } from '../../user/user.model';
import { TaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {
  @Input({required: true}) user!: UserData;
  @Output() task = new EventEmitter<TaskData>();
}
