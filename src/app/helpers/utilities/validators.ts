import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validatePassword(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    if (control.root.get('password')) {
      return control.value === control.root.get('password')?.value ? null : { MatchPassword: true }
    }
    return null;
  }
}

export function validatePasswordForm() {
  return (form: FormGroup): ValidationErrors | null => {

    const password = form.get('password')?.value;
    const confirmPassword = form.get('password_confirmation')?.value;

    if (password !== null && confirmPassword !== null && confirmPassword !== '') {
      return password !== confirmPassword ? { MatchPassword: true} : null;
    }
    return null;
  }
}
