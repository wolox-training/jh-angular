import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnAuthRoutingModule } from './unauth-routing.module';
import { FormModule } from 'src/app/components/form/form.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserService } from 'src/app/services/user.service';
import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [SignUpComponent, SignInComponent],
  imports: [
    CommonModule,
    UnAuthRoutingModule,
    FormModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService]
})
export class UnAuthModule { }
