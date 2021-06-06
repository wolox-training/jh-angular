import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { BookListComponent } from './book-list/book-list.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/app/services/token-interceptor.service';
import { BooksService } from 'src/app/services/books.service';
import { BookModule } from 'src/app/components/book/book.module';


@NgModule({
  declarations: [
    AuthComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HeaderModule,
    HttpClientModule,
    BookModule
  ],
  providers: [BooksService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }]
})
export class AuthModule { }
