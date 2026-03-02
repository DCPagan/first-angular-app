import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from './dummy-users';
import { type UserData } from "./user/user.model";
import { Header } from "./header/header";
import { Tasks } from "./tasks/tasks";
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, Tasks, User],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal<string>('first-angular-app');
  users: Array<UserData> = DUMMY_USERS;
  selectedUser = signal<UserData | undefined>(undefined);

  onSelectUser(user: UserData): void {
    this.selectedUser.set(user);
  }
}
