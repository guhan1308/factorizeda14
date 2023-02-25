import { TestBed } from '@angular/core/testing';

import { EnquiryquotesService } from './enquiryquotes.service';

describe('EnquiryquotesService', () => {
  let service: EnquiryquotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnquiryquotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
