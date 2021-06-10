import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BookRespose } from '../screens/auth/interfaces/book-response.interface';
import { BooksResponse } from '../screens/auth/interfaces/books-response.interface';

@Injectable()
export class BooksService {

  private readonly apiBaseUrl = environment.gateway;

  constructor(private http: HttpClient) { }

  getBooks(): Observable<BooksResponse> {
    return this.http.get<BooksResponse>(`${this.apiBaseUrl}/books`);
  }

  getBook(id: string): Observable<BookRespose> {
    return this.http.get<BookRespose>(`${this.apiBaseUrl}/books/${id}`);
  }

}
