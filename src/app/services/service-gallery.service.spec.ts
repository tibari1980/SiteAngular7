import { TestBed } from '@angular/core/testing';

import { ServiceGalleryService } from './service-gallery.service';

describe('ServiceGalleryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceGalleryService = TestBed.get(ServiceGalleryService);
    expect(service).toBeTruthy();
  });
});
