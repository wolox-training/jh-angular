import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { FormModule } from 'src/app/components/form/form.module';
import { SignInMock, SignInMockEmpty, SignInMockInvalid, SignInMockResponse } from 'src/app/helpers/mocks/sign-in.mock';
import { UserService } from 'src/app/services/user.service';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormModule, RouterTestingModule],
      providers: [UserService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should not login when fields are empty', () => {
    const spy = spyOn(component, 'signIn').and.callThrough();
    component.form.setValue(SignInMockEmpty);
    fixture.detectChanges();
    const button: HTMLElement = fixture.debugElement.nativeElement.querySelector('#btn-submit');
    button.click();
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should show message error', () => {
    const form = component.form;
    form.setValue(SignInMockInvalid)
    form.markAllAsTouched();
    fixture.detectChanges();

    const small: HTMLElement = fixture.debugElement.nativeElement.querySelector('#alert');
    expect(small.textContent).not.toBe('');
  });

  it('Should not login when fields are invalid', () => {
    const spy = spyOn(component, 'signIn').and.callThrough();
    const form = component.form;
    form.setValue(SignInMockInvalid);
    form.markAllAsTouched();
    fixture.detectChanges();

    const button: HTMLElement = fixture.debugElement.nativeElement.querySelector('#btn-submit');
    button.click();

    expect(spy).not.toHaveBeenCalled();
  });

  it('Should login success', () => {
    spyOn(userService, 'signIn').and.returnValue(of(SignInMockResponse));
    const form = component.form;
    form.setValue(SignInMock);
    fixture.detectChanges();

    const button: HTMLElement = fixture.debugElement.nativeElement.querySelector('#btn-submit');
    button.click();

    userService.signIn(SignInMock).subscribe(res => {
      expect(res).toEqual(SignInMockResponse);
    });
  });
});
