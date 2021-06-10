import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksMockResponse } from 'src/app/helpers/mocks/books.mock';

import { ShoppingCartComponent } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    component.data = BooksMockResponse.page;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove book to list shopping cart', () => {
    const firstBook = BooksMockResponse.page[0];
    const spyMethod = spyOn(component, 'removeBook').and.callThrough();
    const button: HTMLElement = fixture.debugElement.nativeElement.querySelector('#book-remove');
    button.click();

    expect(spyMethod).toHaveBeenCalled();
    expect(component.data.findIndex(book => book === firstBook)).toEqual(-1);
  });
});
