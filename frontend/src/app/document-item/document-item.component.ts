import { Component, Input } from '@angular/core';
import { faFileLines, faMagnifyingGlass, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Document } from '../interfaces/document.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/state/app.state';
import { ModalService } from '../services/modal-service.service';
import { setCurrent } from 'src/state/docsState/docs.actions';

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css']
})
export class DocumentItemComponent {
  faDocument = faFileLines;
  faView = faMagnifyingGlass;
  faTrash = faTrashCan;
  @Input() doc!: Document;

  constructor (private store: Store<AppState>, private modal: ModalService) {}

  openViewModal() {
    console.log("Hello");
    this.modal.openViewModal();
    this.store.dispatch(setCurrent({ doc: this.doc }));
  }
}
