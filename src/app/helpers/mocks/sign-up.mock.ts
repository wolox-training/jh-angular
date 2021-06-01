import { fields } from "src/app/screens/sign-up/constants"

export const SignUpMockEmpty = {
  first_name: 'Juan Miguel',
  last_name: '',
  email: '',
  password: '',
  password_confirmation: '',
  locale: 'en'
}

export const SignUpMockErrorMessage = {
  first_name: 'Juan Miguel',
  last_name: 'Henao Arias',
  email: 'juan.henao@wolox.co.',
  password: '123456xD',
  password_confirmation: '123456xDs',
  locale: 'en'
}

export const FieldsMocks = fields;
