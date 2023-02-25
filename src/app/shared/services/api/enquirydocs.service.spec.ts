import { TestBed } from '@angular/core/testing';

import { EnquirydocsService } from './enquirydocs.service';

describe('EnquirydocsService', () => {
  let service: EnquirydocsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnquirydocsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
