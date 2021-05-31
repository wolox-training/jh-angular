import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SignUp } from '../interfaces/sign-up.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiBaseUrl = environment.gateway;

  constructor(private http: HttpClient) { }

  createUser(newUser: SignUp): Observable<SignUp> {
    return this.http.post<SignUp>(`${this.apiBaseUrl}/users`, newUser);
  }
}
