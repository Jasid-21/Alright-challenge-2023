import { Component } from '@angular/core';
import { faFileLines, faMagnifyingGlass, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css']
})
export class DocumentItemComponent {
  faDocument = faFileLines;
  faView = faMagnifyingGlass;
  faTrash = faTrashCan;
}
