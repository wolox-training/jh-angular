import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { FormModule } from 'src/app/components/form/form.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    FormModule,
    ReactiveFormsModule,
    SignUpRoutingModule
  ]
})
export class SignUpModule { }
