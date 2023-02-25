import { TestBed } from '@angular/core/testing';

import { NpdprojectService } from './npdproject.service';

describe('NpdprojectService', () => {
  let service: NpdprojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpdprojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
