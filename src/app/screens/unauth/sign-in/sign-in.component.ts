import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignIn } from 'src/app/interfaces/sign-in.interface';
import { UserService } from 'src/app/services/user.service';
import { fields, validators } from './constants';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./../auth.component.scss']
})
export class SignInComponent implements OnInit {

  fields = fields;
  form!: FormGroup;
  invalidCredetials = false;
  validators = validators;

  constructor(private fb: FormBuilder, private service: UserService, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  isControlHasError(field: any): boolean {
    const controlName = field.formControlName;
    const control = this.form.get(controlName);

    if (control?.dirty || control?.touched) {
      for (const validator of validators) {
        if (control.hasError(validator.name)) {
          field.errorMessage = validator.errorMessage;
          return true;
        }
      }
    }
    return false;
  }

  signIn() {
    this.invalidCredetials = false;
    this.service.signIn(this.form.value as SignIn).subscribe((res) => {
     localStorage.setItem('ACCESS_TOKEN', res.headers.get('access-token'));
     this.router.navigate(['auth']);
    }, error => {
      this.invalidCredetials = true;
    });
  }

}
