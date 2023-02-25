import { TestBed } from '@angular/core/testing';

import { QmskpiService } from './qmskpi.service';

describe('QmskpiService', () => {
  let service: QmskpiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QmskpiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
