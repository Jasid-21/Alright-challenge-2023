import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private cookieServ: CookieService) { }

  async sendRequest(
    email: string,
    password: string,
    url: string
    ) {
    const resp = await fetch(url, {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const status = resp.status;
    console.log(status);
    if (status == 201) {
      const json = await resp.json();
      console.log(json);
      localStorage.setItem('email', json.email);
      localStorage.setItem('user_id', json.id);
      localStorage.setItem('token', json.token);
      this.router.navigate(['/']);
    }
  }
}
