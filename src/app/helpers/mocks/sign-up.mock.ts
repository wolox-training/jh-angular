import { SignUp } from "src/app/interfaces/sign-up.interface";
import { fields } from "src/app/screens/sign-up/constants"

export const SignUpMock = {
  first_name: 'Juan',
  last_name: 'Henao',
  email: 'juan.arias@test.co',
  password: '123456xD',
  password_confirmation: '123456xD',
  locale: 'en'
};

export const SignUpMockResponse = {
  id: 1,
  first_name: 'Juan',
  last_name: 'Henao',
  email: 'juan.arias@test.co',
  locale: 'en'
};

export const SignUpMockEmpty = {
  first_name: 'Juan Miguel',
  last_name: '',
  email: '',
  password: '',
  password_confirmation: '',
  locale: 'en'
};

export const SignUpMockErrorMessage = {
  first_name: 'Juan Miguel',
  last_name: 'Henao Arias',
  email: 'juan.henao@wolox.co.',
  password: '123456xD',
  password_confirmation: '123456xDs',
  locale: 'en'
};

export const FieldsMocks = fields;
