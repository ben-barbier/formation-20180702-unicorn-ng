import { TestBed, inject } from '@angular/core/testing';

import { UnicornService } from './unicorn.service';

describe('UnicornService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnicornService]
    });
  });

  it('should be created', inject([UnicornService], (service: UnicornService) => {
    expect(service).toBeTruthy();
  }));
});
