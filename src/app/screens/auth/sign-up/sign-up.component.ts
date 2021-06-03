import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validatePassword, validatePasswordForm } from 'src/app/helpers/utilities/validators';
import { UserService } from 'src/app/services/user.service';
import { fields, validators } from './constants';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  fields = fields;
  form!: FormGroup;
  validators = validators;

  constructor(private fb: FormBuilder, private service: UserService, private route: Router) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      first_name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      last_name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,14}$/)
      ])],
      password_confirmation: ['', Validators.compose([
        Validators.required,
        validatePassword()
      ])],
      locale: ['en']
    },
      { validators: validatePasswordForm() }
    );
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

  signUp(): void {
    this.service.createUser(this.form.value).subscribe(() => {
      console.log('success');
      this.route.navigate(['auth/login']);
    }, error => {
      console.error(error.error.errors.full_messages.join());
    });
  }

}
