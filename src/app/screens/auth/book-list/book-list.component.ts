import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from '../interfaces/book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Array<Book> = [];

  constructor(private bookService: BooksService) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(success => {
      console.log(success);
      this.books = success.page;
    }, error => {
      console.error(error);
    });
  }

}
