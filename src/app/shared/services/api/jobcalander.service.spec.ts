import { TestBed } from '@angular/core/testing';

import { JobcalanderService } from './jobcalander.service';

describe('JobcalanderService', () => {
  let service: JobcalanderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobcalanderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
