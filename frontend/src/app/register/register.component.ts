import { Component } from '@angular/core';

import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  faKey = faKey;
  email: string = '';
  password: string = '';
  confirm: string = '';
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private regService: AuthService) {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit() {
    if (this.password != this.confirm) {
      alert("Password and confirmation don't match");
      return;
    }
    const url = `http://localhost:3000/auth/register`
    this.regService.sendRequest(this.email, this.password, url);
  }
}
