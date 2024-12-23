import { TestBed } from '@angular/core/testing';

import { SelectedImageService } from './selected-image.service';

describe('SelectedImageService', () => {
  let service: SelectedImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
