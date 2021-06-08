import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { BooksFiltered, BooksMockResponse } from 'src/app/helpers/mocks/books.mock';
import { BooksService } from 'src/app/services/books.service';

import { BookListComponent } from './book-list.component';

fdescribe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let booksService: BooksService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookListComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [BooksService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    booksService = TestBed.get(BooksService);
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
});
