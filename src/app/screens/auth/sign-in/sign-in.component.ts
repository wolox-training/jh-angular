import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignIn } from 'src/app/interfaces/sign-in.interface';
import { UserService } from 'src/app/services/user.service';
import { fields, validators } from './constants';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  fields = fields;
  form!: FormGroup;
  validators = validators;

  constructor(private fb: FormBuilder, private service: UserService) { }

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

    if (controlName === 'password_confirmation' && this.form.errors?.['MatchPassword']) {
      field.errorMessage = 'Las contraseñas no coinciden.';
      return true
    }

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
    this.service.signIn(this.form.value as SignIn).subscribe((res) => {
     console.log(res);
    }, error => {
      console.error(error);
    });
  }

}
