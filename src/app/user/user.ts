import {
  Component, EventEmitter, Input, Output, Signal, computed
} from '@angular/core';

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
  @Output() select = new EventEmitter<string>()

  imagePath: Signal<string> = computed(() => `users/${this.avatar}`);

  onSelectUser(): void {
    this.select.emit(this.id)
  }
}