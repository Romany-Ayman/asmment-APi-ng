import { TestBed } from '@angular/core/testing';

import { ApiCaclothesService } from './api-caclothes.service';

describe('ApiCaclothesService', () => {
  let service: ApiCaclothesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCaclothesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
