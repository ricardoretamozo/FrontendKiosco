import { TestBed } from '@angular/core/testing';

import { ShieldGuard } from './shield.guard';

describe('ShieldGuard', () => {
  let guard: ShieldGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ShieldGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
