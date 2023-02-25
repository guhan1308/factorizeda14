import { TestBed } from '@angular/core/testing';

import { ProblemformService } from './problemform.service';

describe('ProblemformService', () => {
  let service: ProblemformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
