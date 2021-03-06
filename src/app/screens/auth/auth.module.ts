import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/app/services/token-interceptor.service';
import { BooksService } from 'src/app/services/books.service';
import { BookModule } from 'src/app/components/book/book.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { ModalService } from 'src/app/services/modal.service';


@NgModule({
  declarations: [
    BookListComponent,
    BookDetailsComponent,
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HeaderModule,
    HttpClientModule,
    BookModule,
    ModalModule
  ],
  providers: [BooksService, ModalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }]
})
export class AuthModule { }
