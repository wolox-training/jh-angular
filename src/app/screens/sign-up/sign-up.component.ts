import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  fields = [
    { label: 'Nombre', name: 'name', type: 'text'},
    { label: 'Apellido', name: 'lastname', type: 'text'},
    { label: 'Email', name: 'email', type: 'email'},
    { label: 'Password', name: 'password', type: 'password'},
    { label: 'Confirmación de Password', name: 'confirmPassword', type: 'password'},
  ];
  signUpForm: any = { name: '', lastname: '', email: '', password: '', confirmPassword: '' };

  ngOnInit(): void {
  }

  public signUp(): void {
    console.log(this.signUpForm);
  }

}
