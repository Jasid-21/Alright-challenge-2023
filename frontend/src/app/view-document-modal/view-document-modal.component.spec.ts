import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDocumentModalComponent } from './view-document-modal.component';

describe('ViewDocumentModalComponent', () => {
  let component: ViewDocumentModalComponent;
  let fixture: ComponentFixture<ViewDocumentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDocumentModalComponent]
    });
    fixture = TestBed.createComponent(ViewDocumentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
