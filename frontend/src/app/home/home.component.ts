import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal-service.service';
import { Document } from '../interfaces/document.interface';

import { AppState } from 'src/state/app.state';
import { Store } from '@ngrx/store';
import { setCurrent, setDocs } from 'src/state/docsState/docs.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public documents$;

  constructor(
    private modalService: ModalService,
    private store: Store<AppState>,
  ) {
    this.documents$ = this.store.select((store) => store.docs.docs);
  }

  async ngOnInit() {
    const token = localStorage.getItem('token');
    const headers = new Headers();
    headers.set('Authorization', `Bearer ${token}`);
    const url = `http://localhost:3000/documents`;
    const resp = await fetch(url, { headers });
    const status = resp.status;

    if (status == 200) {
      const json = await resp.json()
      console.log(json);
      this.store.dispatch(setDocs({ docs: json }));
    }
  }

  openLoadModal() {
    this.modalService.openLoadModal();
  }
}
