import { Component } from '@angular/core';

import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';


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

  constructor(private formBuilder: FormBuilder, private service: RegisterService) {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit() {
    if (this.password != this.confirm) {
      alert("Password and confirmation don't match");
      return;
    }
    this.service.sendRequest(this.email, this.password);
  }
}
