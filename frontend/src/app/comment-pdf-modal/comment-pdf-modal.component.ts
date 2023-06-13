import { Component } from '@angular/core';

@Component({
  selector: 'app-comment-pdf-modal',
  templateUrl: './comment-pdf-modal.component.html',
  styleUrls: ['./comment-pdf-modal.component.css']
})
export class CommentPdfModalComponent {
  show: boolean = false;
  comment: string = '';
  doc_id: number | undefined = undefined;

  async sendComment() {
    const token = localStorage.getItem('token');
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${token}`);
    headers.set('Content-Type', 'application/json');
    const url = `http://localhost:3000/documents/comment`;
    console.log(this.doc_id);
    const resp = await fetch(url, {
      method: 'post',
      headers,
      body: JSON.stringify({
        comment: this.comment,
        doc_id: this.doc_id
      }),
    });
    const status = resp.status;

    if (status == 200) {
      const json = await resp.json();
      console.log(json);
    }
  }

  showModal() {
    this.show = true;
  }

  closeModal(e: Event) {
    e.stopPropagation();
    e.preventDefault();

    this.show = false;
  }

  setDocId(id: number | undefined) {
    this.doc_id = id;
  }
}
