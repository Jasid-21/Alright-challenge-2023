import { Component } from '@angular/core';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faKey = faKey;
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService) {}

  login() {
    this.loginService.sendRequest(this.email, this.password);
  }
}
