import { TestBed } from '@angular/core/testing';

import { VecinosService } from './vecinos/vecinos.service';

describe('VecinosService', () => {
  let service: VecinosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VecinosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
