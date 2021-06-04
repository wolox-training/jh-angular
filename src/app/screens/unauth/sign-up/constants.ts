export const fields = [
  { label: 'Nombre', name: 'name', type: 'text', formControlName: 'first_name', errorMessage: '' },
  { label: 'Apellido', name: 'lastname', type: 'text', formControlName: 'last_name', errorMessage: '' },
  { label: 'Email', name: 'email', type: 'email', formControlName: 'email', errorMessage: '' },
  { label: 'Password', name: 'password', type: 'password', formControlName: 'password', errorMessage: '' },
  { label: 'Confirmación de Password', name: 'confirmPassword', type: 'password', formControlName: 'password_confirmation', errorMessage: '' }
];

export const validators = [
  { name: 'required', errorMessage: 'Campo requerido.'},
  { name: 'minLength', errorMessage: 'El campo debe tener mínimo 3 caracteres.'},
  { name: 'email', errorMessage: 'Formato del correo inválido.'},
  { name: 'pattern', errorMessage: 'La contraseña debe tener mínimo una mayúscula, una minúscula y un número.'},
  { name: 'MatchPassword', errorMessage: 'Las contraseñas no coinciden.'}
];
