import { Component, OnInit } from '@angular/core';
import { faFileLines, faEye, faBars } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  faDocument = faFileLines;
  faEye = faEye;
  faBars = faBars;
  displayed: boolean = false;
  email: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.email = localStorage.getItem('email') || '';
  }

  logout() {
    localStorage.removeItem('email');
    localStorage.removeItem('user_id');
    localStorage.removeItem('token');

    this.router.navigate(['/login']);
  }

  toggle() {
    this.displayed = !this.displayed;
  }
}
