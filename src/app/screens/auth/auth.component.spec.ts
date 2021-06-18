import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderModule } from 'src/app/components/header/header.module';

import { AuthComponent } from './auth.component';
import { BookListComponent } from './book-list/book-list.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthComponent ],
      imports: [HeaderModule, RouterTestingModule.withRoutes([{path: 'auth/books', component: BookListComponent}])]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
