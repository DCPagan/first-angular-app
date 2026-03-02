import { Component, Input } from '@angular/core';
import { Task, TaskData } from './task/task';
import { UserData } from '../dummy-users';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
  @Input({required: true}) user!: UserData;
}
