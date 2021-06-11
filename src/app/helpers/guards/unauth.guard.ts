import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UnAuthGuard implements CanActivate {

  constructor(private _userService: UserService, private _router: Router) {
  }

  canActivate(): boolean {
    if (this._userService.loggedIn()) {
      this._router.navigate(['auth/books']);
      return false;
    }
    return true;
  }

}
