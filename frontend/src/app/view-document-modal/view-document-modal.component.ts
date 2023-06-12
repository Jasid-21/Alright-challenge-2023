import { Component, OnInit, OnChanges } from '@angular/core';
import { ModalService } from '../services/modal-service.service';
import { Observable } from 'rxjs';
import { Document } from '../interfaces/document.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/state/app.state';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-document-modal.component.html',
  styleUrls: ['./view-document-modal.component.css']
})
export class ViewDocumentModalComponent implements OnInit {
  faEye = faEye;
  showModal = true;
  public current$: Observable<Document | null>;
  sanitizedUrl: SafeResourceUrl | null = null;

  constructor(
    private modalService: ModalService,
    private store: Store<AppState>,
    private sanitizer: DomSanitizer
  ) {
    this.current$ = this.store.select((store) => store.docs.current);
    this.current$.subscribe((value) => {
      this.getFile(value);
    })
  }

  async getFile(doc: Document | null) {
    if (!doc) return;

    const token = localStorage.getItem('token');
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${token}`);
    const url = `http://localhost:3000/documents/${doc.id}`;
    const resp = await fetch(url, {
      headers
    });
    const status = resp.status;

    if (status == 200) {
      const blob = await resp.blob();
      console.log(blob);
      const url = URL.createObjectURL(blob);
      this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }

  ngOnInit() {
    this.modalService.showModal$.subscribe(show => {
      this.showModal = show;
    });
  }

  closeModal() {
    this.modalService.closeViewModal();
  }
}
