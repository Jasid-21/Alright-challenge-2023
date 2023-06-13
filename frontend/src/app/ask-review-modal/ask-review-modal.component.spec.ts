import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskReviewModalComponent } from './ask-review-modal.component';

describe('AskReviewModalComponent', () => {
  let component: AskReviewModalComponent;
  let fixture: ComponentFixture<AskReviewModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AskReviewModalComponent]
    });
    fixture = TestBed.createComponent(AskReviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
