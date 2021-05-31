import { Component } from '@angular/core';
import { fields } from './constants';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  fields = fields;
  signUpForm: any = { name: '', lastname: '', email: '', password: '', confirmPassword: '' };

  public signUp(): void {
    console.log(this.signUpForm);
  }

}
