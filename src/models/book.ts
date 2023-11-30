export default class Book {
  id: number;
  title: string;
  author: string;

  private static nextId = 1;

  constructor(title: string, author: string) {
    this.id = Book.nextId++;
    this.title = title;
    this.author = author;
  }
}
