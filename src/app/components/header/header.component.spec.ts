import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SignInComponent } from 'src/app/screens/auth/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/screens/auth/sign-up/sign-up.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [RouterTestingModule.withRoutes([
        { path: 'unauth/sign-up', component: SignUpComponent },
        { path: 'unauth/login', component: SignInComponent }
      ])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should session logout and remove access token', () => {
    localStorage.setItem('ACCESS_TOKEN', 'g5fIk2oyzJma-QmnyIpLJg');
    const button: HTMLElement = fixture.debugElement.nativeElement.querySelector('#btn-logout');
    button.click();

    expect(localStorage.getItem('ACCESS_TOKEN')).toBeNull();
  });

  it('should session logout and navigate to login component', () => {
    const spyRouter = spyOn(router, 'navigate').and.callThrough();

    const button: HTMLElement = fixture.debugElement.nativeElement.querySelector('#btn-logout');
    button.click();

    expect(spyRouter).toHaveBeenCalledWith(['unauth/login']);
  });
});
