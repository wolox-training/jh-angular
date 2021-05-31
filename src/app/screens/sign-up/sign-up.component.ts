import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validatePassword, validatePasswordForm } from 'src/app/helpers/utilities/validators';
import { fields } from './constants';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  fields = fields;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
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

    if (controlName === 'password_confirmation') {
      if (this.form.errors?.['MatchPassword']) {
        field.errorMessage = 'Las contraseñas no coinciden.';
        return true
      }
    }

    if (control?.dirty || control?.touched) {
      if (control?.hasError('required')) {
        field.errorMessage = `${field.label} es requerido.`;
        return true;
      } else if (control?.hasError('minLength')) {
        field.errorMessage = `El campo ${field.label} debe tener mínimo 3 caracteres.`;
        return true;
      } else if (control?.hasError('email')) {
        field.errorMessage = `Formato del correo inválido.`;
        return true;
      } else if (control?.hasError('pattern')) {
        field.errorMessage = `La contraseña debe tener mínimo una mayúscula, una minúscula y un número.`;
        return true;
      } 
    }

    return false;
  }

  signUp(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

}
