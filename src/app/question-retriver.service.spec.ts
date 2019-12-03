import { TestBed } from '@angular/core/testing';

import { QuestionRetriverService } from './question-retriver.service';

describe('QuestionRetriverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionRetriverService = TestBed.get(QuestionRetriverService);
    expect(service).toBeTruthy();
  });
});
