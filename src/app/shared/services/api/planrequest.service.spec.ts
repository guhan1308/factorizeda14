import { TestBed } from '@angular/core/testing';

import { PlanrequestService } from './planrequest.service';

describe('PlanrequestService', () => {
  let service: PlanrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
