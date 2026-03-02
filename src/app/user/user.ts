import {
  Component, EventEmitter, Input, Output, Signal, computed
} from '@angular/core';
import { UserData } from "./user.model";

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  @Input({required: true}) id!: string
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  @Output() select = new EventEmitter<UserData>()

  imagePath: Signal<string> = computed(() => `users/${this.avatar}`);

  onSelectUser(): void {
    const { id, avatar, name }: UserData = this;
    this.select.emit({ id, avatar, name })
  }
}