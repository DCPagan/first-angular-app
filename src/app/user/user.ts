import { Component, Input } from '@angular/core';
import { DUMMY_USERS, UserData } from '../dummy-users';

const randomIndex: number = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  @Input() id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  get imagePath(): string {
    return `users/${this.avatar}`;
  }

  onSelectUser(): void {}
}