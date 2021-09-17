import { TestBed } from '@angular/core/testing';

import { FlashlightServiceService } from './flashlight-service.service';

describe('FlashlightServiceService', () => {
  let service: FlashlightServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashlightServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
