import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { BookMock } from 'src/app/helpers/mocks/books.mock';
import { BooksService } from 'src/app/services/books.service';

import { BookDetailsComponent } from './book-details.component';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let booksService: BooksService;
  let route: ActivatedRoute;
  let activatedRouteSpy;

  beforeEach(async () => {
    activatedRouteSpy = {
      snapshot: {
        paramMap: convertToParamMap({
          id: '1'
        })
      }
    };
    await TestBed.configureTestingModule({
      declarations: [BookDetailsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [BooksService,
        {
          provide: ActivatedRoute,
          useValue: activatedRouteSpy
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    booksService = TestBed.inject(BooksService);
    route = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get id book from params snapshot', () => {
    expect(route.snapshot.paramMap.get('id')).toEqual('1');
  });

  it('should getBook with by ID', () => {
    spyOn(booksService, 'getBook').and.returnValue(of(BookMock));
    component.ngOnInit();
    fixture.detectChanges();
    booksService.getBook(BookMock.id).subscribe(res => {
      expect(res).toEqual(BookMock);
    });
  });
});
