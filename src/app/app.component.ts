import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  showLogIn = false;
  user: string;

  logInForm() {
    this.showLogIn = !this.showLogIn;
  }

  submitClick(email: string) {
    this.showLogIn = !this.showLogIn;
    this.user = email;
  }
}
