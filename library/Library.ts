import { IBook } from "./Book";
import Book from "./Book";
import Booking from "./Booking";
import IBooking from "./Booking";
import IbookingBook from "./Booking";

function findIndexOfElement(input: IBook, array: IBook[]): number {
  const index = array.findIndex((e: any) => e.uuid === input.uuid);
  return index;
}

interface ILibrary {
  allBooks: IBook[];
  bookingList: any[];
  listOfRentedBooks: IBook[];
  addToAllBooksList(book: IBook): void;
  removeFromAllBooksList(book: IBook): void;
  rentBookForUser(book: IBook, user: string): void;
  removeFromListOfRentedBooks(book: IBook): void;
}

class Library implements ILibrary {
  allBooks: IBook[] = [];
  bookingList: any[] = [];
  listOfRentedBooks = [];
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
    // Validator.checkIfStringIsEmpty(user);
    const index = findIndexOfElement(book, this.allBooks);
    if (index === -1) {
      throw new Error("book is not in allBooks, or has been rented already");
    }
    const bookingObject: IBooking = new Booking();
    this.bookingList.push(bookingObject.rentBook(book, user));
    // this.listOfRentedBooks.push(book);
    // this.removeFromAllBooksList(book);
  }

  //   returnRentedBook(book, user) {
  //     Validator.checkIfInputIsInstanceOfObject(book, Book);
  //     Validator.checkIfStringIsEmpty(user);
  //     const index = findIndexOfElement(book, this.bookingList);
  //     const returnedBooking = new Booking().returnBook(
  //       this.bookingList[index],
  //       user
  //     );
  //     this.bookingList[index] = returnedBooking;
  //     this.addToAllBooksList(book);
  //     this.removeFromListOfRentedBooks(book);
  //   }
}
const library = new Library();
let book1: Book = new Book(
  "Trzej muszkieterowie",
  "dumas",
  "Książka o muszkieterach"
);
const user1: string = "Jonh";
console.log(book1);
library.addToAllBooksList(book1);
library.rentBookForUser(book1, user1);

export default library;
// const book1 = new Book("Medicus", "N.Gordon", "descriptions/description1.txt");
// const book2 = new Book("Zły", "L.Tyrmand", "descriptions/description2.txt");
// const book3 = new Book("Diuna", "F.Herbert", "descriptions/description1.txt");
// const book4 = new Book("Solaris", "S.Lem", "descriptions/description2.txt");

// library.addToAllBooksList(book1);
// library.addToAllBooksList(book2);
// library.addToAllBooksList(book3);
// library.addToAllBooksList(book4);
// library.removeFromAllBooksList(book1);
// library.rentBookForUser(book2, user1);
// library.returnRentedBook(book2, user1);

// library.rentBookForUser(book1, user1);
// library.rentBookForUser(book2, user2);
// library.returnRentedBook(book2, user2);
// library.rentBookForUser(book2, user2);
// library.rentBookForUser(book2, user2);

// Obiekt charakteryzujący bibliotekę:
// class Library {
// Ma miec: listę książek, listę wypożyczeń oraz listę wypożyczonych książek
// Ma umożliwiać:
// - dodawanie książek do listy
// - usuwanie książek z listy
// - wypożyczanie książki dla usera X
// - oddanie wypożyczania książki
// }
