import { TestBed } from '@angular/core/testing';

import { CommonServicesServiceService } from './common-services-service.service';

describe('CommonServicesServiceService', () => {
  let service: CommonServicesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonServicesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
