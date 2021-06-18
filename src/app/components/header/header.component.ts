import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/screens/auth/interfaces/book.interface';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() books: Array<Book> = [];

  constructor(private router: Router, private modalService: ModalService) {
  }

  sessionLogout(): void {
    localStorage.removeItem('ACCESS_TOKEN');
    this.router.navigate(['unauth/login']);
  }

  showShoppingCart() {
    this.modalService.open();
  }

}
