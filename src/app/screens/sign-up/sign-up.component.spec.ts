import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { FormModule } from 'src/app/components/form/form.module';
import { FieldsMocks, SignUpMock, SignUpMockEmpty, SignUpMockErrorMessage, SignUpMockResponse } from 'src/app/helpers/mocks/sign-up.mock';
import { UserService } from 'src/app/services/user.service';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent should', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let userService: UserService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormModule,
        RouterTestingModule.withRoutes([
          { path: 'sign-up', component: SignUpComponent },
          { path: 'login', component: SignUpComponent }
        ])],
      providers: [UserService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('not record when fields are empty', fakeAsync(() => {
    const onClickMock = spyOn(component, 'signUp').and.callThrough();
    component.form.setValue(SignUpMockEmpty);
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(onClickMock).not.toHaveBeenCalled();
  }));

  it('show message error', fakeAsync(() => {
    const spy = spyOn(component, 'isControlHasError').and.callThrough();
    const fieldEmail = FieldsMocks[0];
    const form = component.form;
    form.setValue(SignUpMockErrorMessage);
    form.markAllAsTouched();
    fixture.detectChanges();

    const small: HTMLElement = fixture.debugElement.nativeElement.querySelector('small');
    tick();

    expect(small.textContent).not.toBe('');
    expect(spy).toHaveBeenCalledWith(fieldEmail);
  }));

  it('not record when fields are invalid', fakeAsync(() => {
    const spy = spyOn(component, 'signUp').and.callThrough();
    const form = component.form;
    form.setValue(SignUpMockErrorMessage);
    form.markAllAsTouched();
    fixture.detectChanges();

    const small: HTMLElement = fixture.debugElement.nativeElement.querySelector('small');
    const button: HTMLElement = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();

    expect(small.textContent).not.toBe('');
    expect(spy).not.toHaveBeenCalled();
  }));

  it('create user', fakeAsync(() => {
    spyOn(userService, 'createUser').and.returnValue(of(SignUpMockResponse));
    const form = component.form;
    form.setValue(SignUpMock);
    fixture.detectChanges();

    const button: HTMLElement = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    let response;
    userService.createUser(SignUpMock).subscribe(res => {
      response = res;
      expect(response).toEqual(SignUpMockResponse);
    });
  }));

  it('create user and navigate to login', fakeAsync(() => {
    const spyRouter = spyOn(router, 'navigate').and.callThrough();
    spyOn(userService, 'createUser').and.returnValue(of(SignUpMockResponse));
    const form = component.form;
    form.setValue(SignUpMock);
    fixture.detectChanges();

    const button: HTMLElement = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    userService.createUser(SignUpMock).subscribe(() => {
      expect(spyRouter).toHaveBeenCalledWith(['/login']);
    });
  }));
});
