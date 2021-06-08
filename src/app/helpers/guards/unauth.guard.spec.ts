import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BookListComponent } from 'src/app/screens/auth/book-list/book-list.component';
import { UserService } from 'src/app/services/user.service';

import { UnAuthGuard } from './unauth.guard';

describe('UnAuthGuard', () => {
  let guard: UnAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([{ path: 'auth/books', component: BookListComponent }])],
      providers: [UserService]
    });
    guard = TestBed.inject(UnAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should not be able to hit route unauth when user is logged in', () => {
    localStorage.setItem('ACCESS_TOKEN', 'Byaslkdasdnxuaksaj-asas');
    expect(guard.canActivate()).toBeFalse();
  });

  it('should be able to hit route unauth when user is not logged in', () => {
    localStorage.clear();
    expect(guard.canActivate()).toBeTrue();
  });
});
