import { Component, Input } from '@angular/core';
import { Document } from '../interfaces/document.interface';
import { Observable, BehaviorSubject } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/state/app.state';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-ask-review-modal',
  templateUrl: './ask-review-modal.component.html',
  styleUrls: ['./ask-review-modal.component.css']
})
export class AskReviewModalComponent {
  show = false;
  users: User[] = [];
  doc_id: number | undefined = undefined;
    ;
  chosen_user: number = -1;
  public current$: Observable<Document | null>;

  constructor(
    private store: Store<AppState>,
  ) {
    this.current$ = store.select((store) => store.docs.current);
  }

  closeModal(e: Event) {
    e.stopPropagation();
    e.preventDefault();
    this.show = false;
  }

  showModal() {
    this.show = true;
    this.getUsers();
  }

  setDocId(id: number | undefined) {
    this.doc_id = id;
  }

  async AskReview() {
    const token = localStorage.getItem('token');
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${token}`);
    headers.set('Content-Type', 'application/json');
    const url = `http://localhost:3000/documents/askReview`;
    console.log(this.doc_id);
    const resp = await fetch(url, {
      method: 'post',
      headers,
      body: JSON.stringify({
        guest_id: this.chosen_user,
        doc_id: this.doc_id
      }),
    });
    const status = resp.status;

    if (status == 200) {
      const json = await resp.json();
      console.log(json);
      this.users = json;
    }
  }

  async getUsers() {
    const token = localStorage.getItem('token');
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${token}`);
    const url = `http://localhost:3000/users`;
    const resp = await fetch(url, {
      headers
    });
    const status = resp.status;

    if (status == 200) {
      const json = await resp.json();
      console.log(json);
      this.users = json;
    }
  }
}
