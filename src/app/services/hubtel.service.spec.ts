import { TestBed } from '@angular/core/testing';

import { HubtelService } from './hubtel.service';

describe('HubtelService', () => {
  let service: HubtelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HubtelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
