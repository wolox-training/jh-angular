import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SignInComponent } from 'src/app/screens/unauth/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/screens/unauth/sign-up/sign-up.component';
import { ModalService } from 'src/app/services/modal.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  let modalService: ModalService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [RouterTestingModule.withRoutes([
        { path: 'unauth/sign-up', component: SignUpComponent },
        { path: 'unauth/login', component: SignInComponent }
      ])],
      providers: [ModalService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    modalService = TestBed.inject(ModalService);
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

  it('should show shopping cart', () => {
    const spyMethod = spyOn(component, 'showShoppingCart').and.callThrough();

    const button: HTMLElement = fixture.debugElement.nativeElement.querySelector('#btn-shopping-cart');
    button.click();

    expect(spyMethod).toHaveBeenCalled();
  });

  it('should show modal of shopping cart', () => {
    const spyModalService = spyOn(modalService, 'open').and.callThrough();
    component.showShoppingCart();

    expect(spyModalService).toHaveBeenCalled();
  });
});
