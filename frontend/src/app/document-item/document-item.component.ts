import { Component, Input } from '@angular/core';
import { faFileLines, faMagnifyingGlass, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Document } from '../interfaces/document.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/state/app.state';
import { ModalService } from '../services/modal-service.service';
import { deleteDoc, setCurrent } from 'src/state/docsState/docs.actions';

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

  async deleteDocument() {
    if (!confirm('Are you sure you want to delete this document?')) return;

    const token = localStorage.getItem('token');
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${token}`);
    const url = `http://localhost:3000/documents/${this.doc.id}`;
    const resp = await fetch(url, {
      method: 'delete',
      headers
    });
    const status = resp.status;

    if (status == 200) {
      const json = await resp.json()
      console.log(json);
      this.store.dispatch(deleteDoc({ id: this.doc.id }));
    }
  }
}
