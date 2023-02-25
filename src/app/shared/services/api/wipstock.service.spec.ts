import { TestBed } from '@angular/core/testing';

import { WipstockService } from './wipstock.service';

describe('WipstockService', () => {
  let service: WipstockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WipstockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
