import { BookRespose } from "src/app/screens/auth/interfaces/book-response.interface";
import { Book } from "src/app/screens/auth/interfaces/book.interface";
import { BooksResponse } from "src/app/screens/auth/interfaces/books-response.interface";

export const BooksMockResponse: BooksResponse = {
  page: [
    {
      id: 1,
      author: "John Miedema",
      title: "Slow reading",
      image_url: "https://covers.openlibrary.org/b/id/5546156-L.jpg",
      editor: "Litwin Books",
      year: "2009",
      genre: "no registra",
      created_at: new Date("2020-05-07T01:43:29.970Z"),
      updated_at: new Date("2020-05-07T01:43:29.970Z")
    },
    {
      id: 2,
      author: "Adam West,Jeff Rovin",
      title: "Back to the Batcave",
      image_url: "https://covers.openlibrary.org/b/id/270628-L.jpg",
      editor: "Berkley Books",
      year: "1994",
      genre: "no registra",
      created_at: new Date("2020-05-07T01:58:19.941Z"),
      updated_at: new Date("2020-05-07T01:58:19.941Z")
    },
    {
      id: 3,
      author: "Sin registro",
      title: "The West Wing",
      image_url: "https://covers.openlibrary.org/b/id/476938-L.jpg",
      editor: "Pocket",
      year: "8",
      genre: "Sin registro",
      created_at: new Date("2020-05-07T03:05:01.219Z"),
      updated_at: new Date("2020-05-07T03:05:01.219Z")
    },
    {
      id: 4,
      author: "Leslie Kelly",
      title: "Make Me Over",
      image_url: "https://covers.openlibrary.org/b/id/219859-L.jpg",
      editor: "Harlequin",
      year: "1",
      genre: "Sin registro",
      created_at: new Date("2020-05-07T03:14:31.312Z"),
      updated_at: new Date("2020-05-07T03:14:31.312Z")
    }
  ],
  count: 1,
  total_pages: 1,
  total_count: 14,
  current_page: 1,
  next_page: 0
};

export const BooksFiltered: Array<Book> = [
  {
    id: 2,
    author: "Adam West,Jeff Rovin",
    title: "Back to the Batcave",
    image_url: "https://covers.openlibrary.org/b/id/270628-L.jpg",
    editor: "Berkley Books",
    year: "1994",
    genre: "no registra",
    created_at: new Date("2020-05-07T01:58:19.941Z"),
    updated_at: new Date("2020-05-07T01:58:19.941Z")
  },
  {
    id: 3,
    author: "Sin registro",
    title: "The West Wing",
    image_url: "https://covers.openlibrary.org/b/id/476938-L.jpg",
    editor: "Pocket",
    year: "8",
    genre: "Sin registro",
    created_at: new Date("2020-05-07T03:05:01.219Z"),
    updated_at: new Date("2020-05-07T03:05:01.219Z")
  }
];

export const BookMockResponse: BookRespose = {
  id: 1,
  author: "John Miedema",
  title: "Slow reading",
  image_url: "https://covers.openlibrary.org/b/id/5546156-L.jpg",
  editor: "Litwin Books",
  year: "2009",
  genre: "no registra",
  current_rent: ""
};

export const BookMock = BooksFiltered[0];
