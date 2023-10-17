import { Component } from '@angular/core';

type User = {
  firstName: string;
  lastName: string;
  email: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userList: User[] = [];

  addUser(user: User) {
    this.userList.push(user);
  }
}
