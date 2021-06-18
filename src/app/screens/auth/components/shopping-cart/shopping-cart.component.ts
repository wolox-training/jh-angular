import { Component, Input } from '@angular/core';
import { Book } from '../../interfaces/book.interface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  @Input() data: Array<Book> = [];

  removeBook(book: Book) {
    this.data = this.data.filter(x => x !== book);
  }

}
