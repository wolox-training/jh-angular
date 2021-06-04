import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {

  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('ACCESS_TOKEN');
    this.router.navigate(['auth/login']);
  }

}
