import { TestBed } from '@angular/core/testing';

import { TrainingcalandarService } from './trainingcalandar.service';

describe('TrainingcalandarService', () => {
  let service: TrainingcalandarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrainingcalandarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
