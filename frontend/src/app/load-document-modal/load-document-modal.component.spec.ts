import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDocumentModalComponent } from './load-document-modal.component';

describe('LoadDocumentModalComponent', () => {
  let component: LoadDocumentModalComponent;
  let fixture: ComponentFixture<LoadDocumentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadDocumentModalComponent]
    });
    fixture = TestBed.createComponent(LoadDocumentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
