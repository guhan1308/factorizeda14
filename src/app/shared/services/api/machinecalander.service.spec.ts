import { TestBed } from '@angular/core/testing';

import { MachinecalanderService } from './machinecalander.service';

describe('MachinecalanderService', () => {
  let service: MachinecalanderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MachinecalanderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
