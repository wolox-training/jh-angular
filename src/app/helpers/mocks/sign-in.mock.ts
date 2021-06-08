export const SignInMock = {
  email: 'juan.arias@test.co',
  password: '123456xD',
};

export const SignInMockEmpty = {
  email: '',
  password: '',
};

export const SignInMockInvalid = {
  email: 'juan.arias@test.',
  password: '123456xD',
};

export const SignInMockResponse = {
  data: {
    id: 1,
    email: "juan.arias@test.co'",
    provider: "email",
    uid: "juan.arias@test.co'",
    allow_password_change: false,
    first_name: "Juan",
    last_name: "Arias",
    locale: "en"
  }
}
