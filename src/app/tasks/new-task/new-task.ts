import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  @Output() add = new EventEmitter<TaskData>();
  @Output() cancel = new EventEmitter<void>();

  title: string = '';
  summary: string = '';
  dueDate: string = '';

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
    this.add.emit(this.task);
  }

  onClose() {
    this.cancel.emit();
  }
}
