import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { User } from "./user/user";
import { DUMMY_USERS, UserData } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, User],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('first-angular-app');
  users: Array<UserData> = DUMMY_USERS;
}
