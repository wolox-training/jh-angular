import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from 'src/app/services/user.service';

import { UnAuthGuard } from './unauth.guard';

describe('UnAuthGuard', () => {
  let guard: UnAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [UserService]
    });
    guard = TestBed.inject(UnAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
