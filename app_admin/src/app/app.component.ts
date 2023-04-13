import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travlr Getaways Admin';

  private user?: User | null;

  constructor(private authService: AuthenticationService) {
    this.authService.userSubject.subscribe(u => this.user = u);
  }

  isLoggedIn() {
    return !!this.user;
  }
}
