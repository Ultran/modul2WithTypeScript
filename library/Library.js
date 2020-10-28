// import Book from "./Book.js";
// import Booking from "./Booking.js";
// import Validator from "../Validator.js";

// function findIndexOfElement(input, array) {
//   const index = array.findIndex((e) => e.uuid === input.uuid);
//   return index;
// }

// export default class Library {
//   constructor() {
//     this.allBooks = [];
//     this.bookingList = [];
//     this.listOfRentedBooks = [];
//   }

//   addToAllBooksList(item) {
//     Validator.checkIfInputIsInstanceOfObject(item, Book);
//     const index = findIndexOfElement(item, this.allBooks);
//     if (index !== -1) {
//       throw Error("book is already in library");
//     }
//     this.allBooks.push(item);
//   }
//   removeFromAllBooksList(item) {
//     Validator.checkIfInputIsInstanceOfObject(item, Book);
//     const index = findIndexOfElement(item, this.allBooks);
//     if (index === -1) {
//       throw new Error("book is not in bookList, or has been deleted already");
//     }
//     this.allBooks.splice(index, 1);
//   }
//   removeFromListOfRentedBooks(item) {
//     Validator.checkIfInputIsInstanceOfObject(item, Book);
//     const index = findIndexOfElement(item, this.listOfRentedBooks);
//     if (index === -1) {
//       throw new Error("book is not in bookList, or has been deleted already");
//     }
//     this.listOfRentedBooks.splice(index, 1);
//   }

//   rentBookForUser(book, user) {
//     Validator.checkIfInputIsInstanceOfObject(book, Book);
//     Validator.checkIfStringIsEmpty(user);
//     const index = findIndexOfElement(book, this.allBooks);
//     if (index === -1) {
//       throw new Error("book is not in allBooks, or has been rented already");
//     }
//     const bookingObject = new Booking().rentBook(book, user);
//     this.bookingList.push(bookingObject);
//     this.listOfRentedBooks.push(book);
//     this.removeFromAllBooksList(book);
//   }

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
// }

// const user1 = "User1";
// const user2 = "User2";
// const library = new Library();
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

// // library.rentBookForUser(book1, user1);
// // library.rentBookForUser(book2, user2);
// // library.returnRentedBook(book2, user2);
// // library.rentBookForUser(book2, user2);
// // library.rentBookForUser(book2, user2);

// console.log(library.allBooks);
