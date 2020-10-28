// import { v4 as uuidv4 } from "uuid";
// import moment from "moment";
// import Validator from "../Validator.js";
// import Book from "./Book.js";

// const cashPenaltyForOneDayLate = 3;
// function daysFromMiliseconds(ms) {
//   return ms / 100 / 60 / 60 / 24 / 10;
// }

// export default class Booking {
//   constructor() {
//     this.uuid = uuidv4();
//     this.rentingStartDate = moment().format("L");
//     this.maxDateOfreturnBook = moment().subtract(8, "days").format("L");
//     this.cashPenaltyForLate = 0;
//   }
//   rentBook(book, user) {
//     Validator.checkIfInputIsInstanceOfObject(book, Book);
//     Validator.checkIfStringIsEmpty(user);
//     const booking = {
//       bookingId: this.uuid,
//       uuid: book.uuid,
//       status: "active",
//       title: book.title,
//       author: book.author,
//       user: user,
//       startDate: this.rentingStartDate,
//       maxDateOfReturn: this.maxDateOfreturnBook,
//     };
//     return booking;
//   }
//   returnBook(book, user) {
//     Validator.checkIfInputIsInstanceOfObject(book, Book);
//     Validator.checkIfStringIsEmpty(user);
//     const maxDateOfReturne = book.maxDateOfReturn;
//     const dayOfReturneBook = moment().format("L");
//     const lateInMs = new Date(dayOfReturneBook) - new Date(maxDateOfReturne);
//     const lateInDays = Math.floor(daysFromMiliseconds(lateInMs));
//     if (lateInDays > 0) {
//       this.cashPenaltyForLate = lateInDays * cashPenaltyForOneDayLate;
//       console.log(`Late charge = ${this.cashPenaltyForLate}`);
//     }

//     const returnedBooking = {
//       bookingId: book.bookingId,
//       uuid: book.uuid,
//       status: "returned",
//       title: book.title,
//       author: book.author,
//       user: user,
//       startDate: this.rentingStartDate,
//       maxDateOfReturn: this.maxDateOfreturnBook,
//       dateOfReturn: dayOfReturneBook,
//       cashPenaltyForLate: this.cashPenaltyForLate,
//     };

//     return returnedBooking;

// const day = moment(book.startDate).fromNow("m");
// console.log(day);
// const numbers = day.replace(/[^0-9]/g, "") - 7;
// if (numbers > 7 && is.include(day, "days")) {
//   this.cashPenaltyForLate = numbers - 7 * cashPenaltyForOneDayLate;
//   console.log(this.cashPenaltyForLate);
// }
//   }
// }
