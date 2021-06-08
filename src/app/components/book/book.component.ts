import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/screens/auth/interfaces/book.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book!: Book;
  @Output() addBookToCartEvent = new EventEmitter<Book>();
  @Output() showBookEvent = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  addBookToCart() {
    this.addBookToCartEvent.emit(this.book);
  }

  showBook() {
    this.showBookEvent.emit(this.book);
  }

}
