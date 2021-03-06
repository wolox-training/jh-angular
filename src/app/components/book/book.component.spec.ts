import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookMock } from 'src/app/helpers/mocks/books.mock';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    component.book = BookMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load data in template', () => {
    component.book = BookMock;
    const title: HTMLElement = fixture.debugElement.nativeElement.querySelector('.title');
    const author: HTMLElement = fixture.debugElement.nativeElement.querySelector('.author');

    expect(title.textContent).toEqual(BookMock.title);
    expect(author.textContent).toEqual(BookMock.author);
  });

  it('should emit event add book to shopping cart', () => {
    const spyOutput = spyOn(component.addBookToCartEvent, 'emit').and.callThrough();

    const button: HTMLElement = fixture.debugElement.nativeElement.querySelector('.btn-add');
    button.click();

    expect(spyOutput).toHaveBeenCalledWith(BookMock);
  });

  it('should emit event for show book and navigate to BookDetails', () => {
    const spyOutput = spyOn(component.showBookEvent, 'emit').and.callThrough();

    const button: HTMLElement = fixture.debugElement.nativeElement.querySelector('#show-book');
    button.click();

    expect(spyOutput).toHaveBeenCalledWith(BookMock);
  });
});
