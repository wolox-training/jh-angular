import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { FormModule } from 'src/app/components/form/form.module';
import { SignUpMockEmpty } from 'src/app/helpers/mocks/sign-up.mock';

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

  fit('not record when fields are empty', fakeAsync(() => {
    const onClickMock = spyOn(component, 'signUp').and.callThrough();
    component.form.setValue(SignUpMockEmpty);
    fixture.detectChanges();
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(onClickMock).not.toHaveBeenCalled();
  }));
});
