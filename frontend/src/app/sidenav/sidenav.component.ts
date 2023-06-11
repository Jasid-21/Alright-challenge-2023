import { Component } from '@angular/core';
import { faFileLines, faEye, faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  faDocument = faFileLines;
  faEye = faEye;
  faBars = faBars;
  displayed: boolean = true;

  toggle() {
    this.displayed = !this.displayed;
  }
}
