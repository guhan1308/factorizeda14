import { TestBed } from '@angular/core/testing';

import { TurtlediagramService } from './turtlediagram.service';

describe('TurtlediagramService', () => {
  let service: TurtlediagramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TurtlediagramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
