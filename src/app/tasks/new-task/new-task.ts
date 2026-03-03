import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { UserData } from '../../user/user.model';
import { type TaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {
  @Input({required: true}) user!: UserData;
  @Output() close = new EventEmitter<void>();

  title: string = '';
  summary: string = '';
  dueDate: string = '';
  private tasksService: TasksService = inject(TasksService);

  get task(): TaskData {
    return {
      id: crypto.randomUUID(),
      userId: this.user.id,
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate
    };
  }

  onSubmit() {
    this.tasksService.addTask(this.task);
    this.close.emit();
  }

  onClose() {
    this.close.emit();
  }
}
