import { TestBed } from '@angular/core/testing';

import { NgxReusableUtilLibService } from './ngx-reusable-util-lib.service';

describe('NgxReusableUtilLibService', () => {
  let service: NgxReusableUtilLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxReusableUtilLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
