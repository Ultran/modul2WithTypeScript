import { IBook } from "./Book";
import Book from "./Book";
import Booking from "./Booking";
import IBooking from "./Booking";

function findIndexOfElement(input: IBook, array: IBook[]): number {
  const index = array.findIndex((e: IBook) => e.uuid === input.uuid);
  return index;
}

function findBookingElement(book: IBook, array: IBooking[]): number {
  const index = array.findIndex((e: IBooking) => e.bookId === book.uuid);
  return index;
}

interface ILibrary {
  allBooks: IBook[];
  bookingList: IBooking[];
  listOfRentedBooks: IBook[];
  addToAllBooksList(book: IBook): void;
  removeFromAllBooksList(book: IBook): void;
  rentBookForUser(book: IBook, user: string): void;
  removeFromListOfRentedBooks(book: IBook): void;
}

class Library implements ILibrary {
  allBooks: IBook[] = [];
  bookingList: IBooking[] = [];
  listOfRentedBooks: IBook[] = [];
  constructor() {}

  addToAllBooksList(book: IBook): void {
    const index: number = findIndexOfElement(book, this.allBooks);
    if (index !== -1) {
      throw Error("book is already in library");
    }
    this.allBooks.push(book);
  }
  removeFromAllBooksList(book: IBook): void {
    const index: number = findIndexOfElement(book, this.allBooks);
    if (index === -1) {
      throw new Error("book is not in bookList, or has been deleted already");
    }
    this.allBooks.splice(index, 1);
  }
  removeFromListOfRentedBooks(book: IBook): void {
    const index = findIndexOfElement(book, this.listOfRentedBooks);
    if (index === -1) {
      throw new Error(
        "book is not in list of rented books, or has been deleted already"
      );
    }
    this.listOfRentedBooks.splice(index, 1);
  }

  rentBookForUser(book: IBook, user: string): void {
    const index = findIndexOfElement(book, this.allBooks);
    if (index === -1) {
      throw new Error("book is not in allBooks, or has been rented already");
    }
    this.bookingList.push(new Booking(book, user));
    this.listOfRentedBooks.push(book);
    this.removeFromAllBooksList(book);
  }

  returnRentedBook(book: IBook): void {
    const index: number = findBookingElement(book, this.bookingList);
    const bookingObject = this.bookingList[index];
    const returnedBooking: any = this.bookingList[index].returnBook(
      bookingObject
    );
    this.bookingList.splice(index, 1);
    this.bookingList.push(returnedBooking);
    this.addToAllBooksList(book);
    this.removeFromListOfRentedBooks(book);
  }
}
const library = new Library();

const user1: string = "John";
const user2: string = "Joanna";

const book1: IBook = new Book(
  "Medicus",
  "N.Gordon",
  "descriptions/description1.txt"
);
const book2: IBook = new Book(
  "Zły",
  "L.Tyrmand",
  "descriptions/description2.txt"
);
const book3: IBook = new Book(
  "Diuna",
  "F.Herbert",
  "descriptions/description1.txt"
);
const book4: IBook = new Book(
  "Solaris",
  "S.Lem",
  "descriptions/description2.txt"
);

library.addToAllBooksList(book1);
library.addToAllBooksList(book2);
library.addToAllBooksList(book3);
library.addToAllBooksList(book4);

library.rentBookForUser(book1, user1);
library.rentBookForUser(book2, user2);
library.returnRentedBook(book1);
// library.returnRentedBook(book1, user1);
// library.returnRentedBook(book2, user2);

export default library;

// Obiekt charakteryzujący bibliotekę:
// class Library {
// Ma miec: listę książek, listę wypożyczeń oraz listę wypożyczonych książek
// Ma umożliwiać:
// - dodawanie książek do listy
// - usuwanie książek z listy
// - wypożyczanie książki dla usera X
// - oddanie wypożyczania książki
// }
