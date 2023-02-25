import { TestBed } from '@angular/core/testing';

import { NpdbudgetService } from './npdbudget.service';

describe('NpdbudgetService', () => {
  let service: NpdbudgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpdbudgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
