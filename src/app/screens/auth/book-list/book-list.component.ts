import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { ShoppingCartComponent } from '../components/shopping-cart/shopping-cart.component';
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

  constructor(private bookService: BooksService, private router: Router, private matDialog: MatDialog) {
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
    this.matDialog.open(ShoppingCartComponent, {
      width: '900px',
      height: '600px',
      data: this.booksInCart
    })
  }

}
