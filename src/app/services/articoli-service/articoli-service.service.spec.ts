import { TestBed } from '@angular/core/testing';

import { ArticoliServiceService } from './articoli-service.service';

describe('ArticoliServiceService', () => {
  let service: ArticoliServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticoliServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
