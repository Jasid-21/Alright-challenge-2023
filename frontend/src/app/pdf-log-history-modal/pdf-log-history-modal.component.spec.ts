import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfLogHistoryModalComponent } from './pdf-log-history-modal.component';

describe('PdfLogHistoryModalComponent', () => {
  let component: PdfLogHistoryModalComponent;
  let fixture: ComponentFixture<PdfLogHistoryModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfLogHistoryModalComponent]
    });
    fixture = TestBed.createComponent(PdfLogHistoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
