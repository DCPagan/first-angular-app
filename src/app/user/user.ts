import { Component, Input, Signal, computed } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  @Input() id?: string
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  imagePath: Signal<string> = computed(() => `users/${this.avatar}`);

  onSelectUser(): void {}
}