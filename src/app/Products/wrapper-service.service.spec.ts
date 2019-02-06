import { TestBed } from '@angular/core/testing';

import { WrapperServiceService } from './wrapper-service.service';

describe('WrapperServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WrapperServiceService = TestBed.get(WrapperServiceService);
    expect(service).toBeTruthy();
  });
});
