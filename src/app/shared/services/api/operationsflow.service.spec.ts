import { TestBed } from '@angular/core/testing';

import { OperationsflowService } from './operationsflow.service';

describe('OperationsflowService', () => {
  let service: OperationsflowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationsflowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
