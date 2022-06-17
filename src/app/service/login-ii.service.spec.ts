import { TestBed } from '@angular/core/testing';

import { LoginIIService } from './login-ii.service';

describe('LoginIIService', () => {
  let service: LoginIIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginIIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
