export const fields = [
  { label: 'Email', name: 'email', type: 'email', formControlName: 'email', errorMessage: '' },
  { label: 'Password', name: 'password', type: 'password', formControlName: 'password', errorMessage: '' }
];

export const validators = [
  { name: 'required', errorMessage: 'Campo requerido.'},
  { name: 'email', errorMessage: 'Formato del correo inválido.'},
];
