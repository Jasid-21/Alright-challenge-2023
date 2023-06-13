import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentPdfModalComponent } from './comment-pdf-modal.component';

describe('CommentPdfModalComponent', () => {
  let component: CommentPdfModalComponent;
  let fixture: ComponentFixture<CommentPdfModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentPdfModalComponent]
    });
    fixture = TestBed.createComponent(CommentPdfModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
