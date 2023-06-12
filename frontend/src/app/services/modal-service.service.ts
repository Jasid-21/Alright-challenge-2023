import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private showModalSubject = new Subject<boolean>();
  private loadModalSubject = new Subject<boolean>();
  public showModal$ = this.showModalSubject.asObservable();
  public loadModal$ = this.loadModalSubject.asObservable();

  openViewModal() {
    this.showModalSubject.next(true);
  }

  closeViewModal() {
    this.showModalSubject.next(false);
  }

  openLoadModal() {
    this.loadModalSubject.next(true);
  }

  closeLoadModal() {
    this.loadModalSubject.next(false);
  }
}
