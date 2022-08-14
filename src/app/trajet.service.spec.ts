import { TestBed } from '@angular/core/testing';

import { TrajetService } from './trajet.service';

describe('TrajetService', () => {
  let trajet: TrajetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    trajet = TestBed.inject(TrajetService);
  });

  it('should be created', () => {
    expect(trajet).toBeTruthy();
  });
});
