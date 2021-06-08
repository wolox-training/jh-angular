import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/screens/auth/interfaces/book.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() books: Array<Book> = [];
  @Output() showShoppingCartEvent = new EventEmitter<any>();

  constructor(private router: Router) {
  }

  sessionLogout(): void {
    localStorage.removeItem('ACCESS_TOKEN');
    this.router.navigate(['unauth/login']);
  }

  showShoppingCart() {
    this.showShoppingCartEvent.emit();
  }

}
