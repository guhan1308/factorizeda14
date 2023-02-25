import { TestBed } from '@angular/core/testing';

import { ActiongroupService } from './actiongroup.service';

describe('ActiongroupService', () => {
  let service: ActiongroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiongroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
