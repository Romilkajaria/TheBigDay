import { TestBed } from '@angular/core/testing';

import { CommonProductsServiceService } from './common-products-service.service';

describe('CommonProductsServiceService', () => {
  let service: CommonProductsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonProductsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
