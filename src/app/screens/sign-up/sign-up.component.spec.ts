import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FormModule } from 'src/app/components/form/form.module';
import { FieldsMocks, SignUpMockEmpty, SignUpMockErrorMessage } from 'src/app/helpers/mocks/sign-up.mock';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent should', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule, FormModule, RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
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

  fit('not record when fields are invalid', fakeAsync(() => {
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
  }))
});
