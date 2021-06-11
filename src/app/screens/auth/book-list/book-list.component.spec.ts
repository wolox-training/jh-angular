import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { BookModule } from 'src/app/components/book/book.module';
import { BookMock, BooksFiltered, BooksMockResponse } from 'src/app/helpers/mocks/books.mock';
import { BooksService } from 'src/app/services/books.service';
import { ModalService } from 'src/app/services/modal.service';
import { BookDetailsComponent } from '../book-details/book-details.component';

import { BookListComponent } from './book-list.component';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let booksService: BooksService;
  let router: Router;
  let modalService: ModalService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookListComponent],
      imports: [HttpClientTestingModule, BookModule,
        RouterTestingModule.withRoutes([{ path: 'auth/book/:id', component: BookDetailsComponent }])],
      providers: [BooksService, ModalService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    booksService = TestBed.get(BooksService);
    router = TestBed.get(Router);
    modalService = TestBed.inject(ModalService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all books from service', () => {
    spyOn(booksService, 'getBooks').and.returnValue(of(BooksMockResponse));
    component.ngOnInit();

    booksService.getBooks().subscribe(res => {
      expect(res).toEqual(BooksMockResponse);
    });
  });

  it('should filter books with input', () => {
    component.books = BooksMockResponse.page;
    const input: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#search');
    input.value = 'the';
    fixture.detectChanges();
    input.dispatchEvent(new Event('input'));

    expect(component.booksFiltered).toEqual(BooksFiltered);
  });

  it('should filter books with input empty', () => {
    component.books = BooksMockResponse.page;
    const input: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#search');
    input.value = '';
    fixture.detectChanges();
    input.dispatchEvent(new Event('input'));

    expect(component.booksFiltered).toEqual(BooksMockResponse.page);
  });

  it('should show book and navigate to BookDetails', () => {
    const spyRouter = spyOn(router, 'navigate').and.callThrough();
    const firstBook = BooksMockResponse.page[0];
    component.showBook(firstBook);
    expect(spyRouter).toHaveBeenCalledWith(['auth/book/' + firstBook.id]);
  });

  it('should add book to list of shopping cart', () => {
    const spyListShoppingCart = spyOn(component.booksInCart, 'push').and.callThrough();
    component.addBookToCart(BookMock);

    expect(spyListShoppingCart).toHaveBeenCalledWith(BookMock);
    expect(component.booksInCart[0]).toEqual(BookMock);
  });

  it('should add book to list of shopping cart', () => {
    const spyListShoppingCart = spyOn(component.booksInCart, 'push').and.callThrough();
    component.addBookToCart(BookMock);

    expect(spyListShoppingCart).toHaveBeenCalledWith(BookMock);
    expect(component.booksInCart[0]).toEqual(BookMock);
  });
});
