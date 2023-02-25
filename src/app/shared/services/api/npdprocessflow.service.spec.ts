import { TestBed } from '@angular/core/testing';

import { NpdprocessflowService } from './npdprocessflow.service';

describe('NpdprocessflowService', () => {
  let service: NpdprocessflowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpdprocessflowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
