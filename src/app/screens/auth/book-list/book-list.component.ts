import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { Book } from '../interfaces/book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Array<Book> = [];
  booksFiltered: Array<Book> = [];

  constructor(private bookService: BooksService, private router: Router) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(success => {
      this.books = success.page;
      this.booksFiltered = this.books;
    }, error => {
      console.error(error);
    });
  }

  filter(event: any) {
    const key: string = event.target.value;
    this.booksFiltered = this.books.filter(book => {
      return book.title.toLowerCase().includes(key.toLowerCase());
    });
  }

  showBook(book: Book) {
    this.router.navigate([`auth/book/${book.id}`])
  }

}
