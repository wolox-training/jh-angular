import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SignUpResponse } from '../interfaces/sign-up-response.interface';
import { SignUp } from '../interfaces/sign-up.interface';

@Injectable()
export class UserService {

  private readonly apiBaseUrl = environment.gateway;

  constructor(private http: HttpClient) { }

  createUser(newUser: SignUp): Observable<SignUpResponse> {
    return this.http.post<SignUpResponse>(`${this.apiBaseUrl}/users`, newUser);
  }
}
