import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SignIn } from '../interfaces/sign-in.interface';
import { SignUpResponse } from '../interfaces/sign-up-response.interface';
import { SignUp } from '../interfaces/sign-up.interface';

@Injectable()
export class UserService {

  private readonly apiBaseUrl = environment.gateway;

  constructor(private http: HttpClient) { }

  createUser(user: SignUp): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(`${this.apiBaseUrl}/users`, user);
  }

  signIn(user: SignIn): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/users/sign_in`, user, { observe: 'response'});
  }

  loggedIn() {
    return !!localStorage.getItem('ACCESS_TOKEN');
  }

}
