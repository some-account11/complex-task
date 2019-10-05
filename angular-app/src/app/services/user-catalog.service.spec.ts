import { TestBed } from '@angular/core/testing';

import { UserCatalogService } from './user-catalog.service';

describe('UserCatalogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserCatalogService = TestBed.get(UserCatalogService);
    expect(service).toBeTruthy();
  });
});
