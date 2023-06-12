import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal-service.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/state/app.state';
import { addDoc } from 'src/state/docsState/docs.actions';

@Component({
  selector: 'app-load-modal',
  templateUrl: './load-document-modal.component.html',
  styleUrls: ['./load-document-modal.component.css']
})

export class LoadDocumentModalComponent implements OnInit {
  showModal = false;
  selectedFile: File | null = null;
  name: string = '';

  constructor(
    private modalService: ModalService,
    private store: Store<AppState>) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  async uploadFile() {
    if (!this.selectedFile || !this.name) return;

    const formData: FormData = new FormData();
    formData.append('name', this.name);
    formData.append('file', this.selectedFile);

    const token = localStorage.getItem('token');
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${token}`);

    try {
      const resp = await fetch('http://localhost:3000/documents', {
        method: 'POST',
        headers,
        body: formData,
      });
      const status = resp.status;
      if (status == 201) {
        const json = await resp.json();
        console.log(json);
        this.store.dispatch(addDoc({ doc: json }));
      }
    } catch (err) {
      console.error(err);
    };
  }

  ngOnInit() {
    this.modalService.loadModal$.subscribe(show => {
      this.showModal = show;
    });
  }

  closeModal() {
    this.modalService.closeLoadModal();
  }
}
