import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignUp } from './interfaces/sign-up.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [FormBuilder]
})
export class SignUpComponent implements OnInit {

  signUpForm: SignUp = { name: '', lastname: '', email: '', password: '', confirmPassword: '' };

  constructor() {
  }

  ngOnInit(): void {
  }

  public signUp(): void {
    console.log(this.signUpForm);
  }

}
