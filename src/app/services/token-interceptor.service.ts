import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req: any, next: any) {
    const userService = this.injector.get(UserService);
    const tokenizedReq = req.clone({
      setHeaders: {
        'access-token': userService.getToken(),
        'client': userService.getClient(),
        'uid': userService.getUid()
      }
    })
    return next.handle(tokenizedReq);
  }
}
