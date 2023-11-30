import Book from "../models/book";

const books: Book[] = [];

async function getBook(id: number): Promise<Book | undefined> {
  return new Promise((resolve, reject) => {
    return resolve(books.find((book) => book.id === id));
  });
}

async function getBooks(): Promise<Book[]> {
  return new Promise((resolve, reject) => {
    return resolve(books);
  });
}
