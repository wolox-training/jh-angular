import { Book } from "./book.interface";

export interface BooksResponse {
  page: Array<Book>,
  count: number,
  total_pages: number,
  total_count: number,
  current_page: number,
  next_page: number
}
