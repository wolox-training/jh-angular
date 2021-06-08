import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { SignInComponent } from 'src/app/screens/unauth/sign-in/sign-in.component';
import { UserService } from 'src/app/services/user.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let userService: UserService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([{ path: 'unauth/login', component: SignInComponent }])],
      providers: [UserService, AuthGuard]
    }).compileComponents();
  });

  beforeEach(() => {
    guard = TestBed.inject(AuthGuard);
    userService = TestBed.get(UserService);
  })

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should be able to hit route when user is logged in', () => {
    spyOn(userService, 'loggedIn').and.returnValue(true);
    expect(guard.canActivate()).toBeTrue();
  });

  it('not should be able to hit route when user is logged in', () => {
    spyOn(userService, 'loggedIn').and.returnValue(false);
    expect(guard.canActivate()).toBeFalse();
  });
});
