import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';
import { DUMMY_USERS, UserData } from '../dummy-users';

const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  selectedUser: WritableSignal<UserData> = signal(DUMMY_USERS[randomIndex]);

  imagePath: Signal<string> = computed(() => `users/${this.selectedUser().avatar}`);

  onSelectUser(): void {
    const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}