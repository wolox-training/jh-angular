import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { BookRespose } from '../interfaces/book-response.interface';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book!: BookRespose;
  bookId: string;
  loaded = false;

  constructor(private route: ActivatedRoute, private bookService: BooksService) {
    this.bookId = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getBook();
  }

  getBook() {
    this.bookService.getBook(this.bookId).subscribe(success => {
      this.book = success;
      this.loaded = true;
    });
  }

}
