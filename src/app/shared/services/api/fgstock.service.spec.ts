import { TestBed } from '@angular/core/testing';

import { FgstockService } from './fgstock.service';

describe('FgstockService', () => {
  let service: FgstockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FgstockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
