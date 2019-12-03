import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionsComponent } from './create-questions.component';

describe('CreateQuestionsComponent', () => {
  let component: CreateQuestionsComponent;
  let fixture: ComponentFixture<CreateQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
