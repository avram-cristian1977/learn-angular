import { TestBed } from '@angular/core/testing';

import { OverAllRatingService } from './over-all-rating.service';

describe('OverAllRatingService', () => {
  let service: OverAllRatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverAllRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
