import { TestBed, inject } from '@angular/core/testing';

import { JsonHolderService } from './json-holder.service';

describe('JsonHolderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonHolderService]
    });
  });

  it('should be created', inject([JsonHolderService], (service: JsonHolderService) => {
    expect(service).toBeTruthy();
  }));
});
