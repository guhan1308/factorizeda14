import { TestBed } from '@angular/core/testing';

import { ControlplanService } from './controlplan.service';

describe('ControlplanService', () => {
  let service: ControlplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
