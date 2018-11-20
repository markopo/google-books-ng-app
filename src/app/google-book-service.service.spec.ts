import { TestBed, inject } from '@angular/core/testing';

import { GoogleBookServiceService } from './google-book-service.service';

describe('GoogleBookServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleBookServiceService]
    });
  });

  it('should be created', inject([GoogleBookServiceService], (service: GoogleBookServiceService) => {
    expect(service).toBeTruthy();
  }));
});
