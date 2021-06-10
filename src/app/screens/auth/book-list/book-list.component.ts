import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { ModalService } from 'src/app/services/modal.service';
import { Book } from '../interfaces/book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Array<Book> = [];
  booksFiltered: Array<Book> = [];
  booksInCart: Array<Book> = [];

  constructor(private bookService: BooksService, private router: Router, private modalService: ModalService) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  addBookToCart(book: Book) {
    this.booksInCart.push(book);
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

  showShoppingCart() {
    this.modalService.open();
  }

}
