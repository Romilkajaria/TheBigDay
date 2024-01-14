import { TestBed } from '@angular/core/testing';

import { CommonVendorService } from './common-vendor-service.service';

describe('CommonVendorServiceService', () => {
  let service: CommonVendorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonVendorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
