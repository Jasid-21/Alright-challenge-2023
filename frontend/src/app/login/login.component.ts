import { Component } from '@angular/core';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faKey = faKey;
  email: string = '';
  password: string = '';

  constructor(private loginService: AuthService) {}

  login() {
    const url = `http://localhost:3000/auth/login`;
    this.loginService.sendRequest(this.email, this.password, url);
  }
}
