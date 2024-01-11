import { TestBed } from '@angular/core/testing';

import { CommonVendorServiceService } from './common-vendor-service.service';

describe('CommonVendorServiceService', () => {
  let service: CommonVendorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonVendorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
