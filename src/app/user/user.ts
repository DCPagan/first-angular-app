import {
  Component, EventEmitter, Input, Output, Signal, computed
} from '@angular/core';
import { type UserData } from "./user.model";

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  @Input({required: true}) user!: UserData;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<UserData>();

  imagePath: Signal<string> = computed(() => `users/${this.user.avatar}`);

  onSelectUser(): void {
    this.select.emit(this.user);
  }
}