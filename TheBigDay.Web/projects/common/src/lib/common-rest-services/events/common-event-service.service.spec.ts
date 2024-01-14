import { TestBed } from '@angular/core/testing';

import { CommonEventServiceService } from './common-event-service.service';

describe('CommonEventServiceService', () => {
  let service: CommonEventServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonEventServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
