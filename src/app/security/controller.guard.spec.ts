import { TestBed } from '@angular/core/testing';

import { ControllerGuard } from './controller.guard';

describe('ControllerGuard', () => {
  let guard: ControllerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ControllerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
