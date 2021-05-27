import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiBaseUrl = environment.gateway;

  constructor(private http: HttpClient) { }

  createUser(newUser: any) {
    return this.http.post<any>(`${this.apiBaseUrl}/users`, newUser);
  }
}
