import { UnAuthGuard } from './helpers/guards/unauth.guard';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { AuthGuard } from './helpers/guards/auth.guard';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule
  ],
  providers: [UserService, AuthGuard, UnAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
