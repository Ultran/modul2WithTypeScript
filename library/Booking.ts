import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import Book from "./Book";
import { IBook } from "./Book";

const cashPenaltyForOneDayLate = 3;
function daysFromMiliseconds(ms: number) {
  return ms / 100 / 60 / 60 / 24 / 10;
}

export interface IbookingBook {
  bookingId: string;
  uuid: string;
  status: "active" | "returned";
  title: string;
  author: string;
  user: string;
  startDate: string;
  maxDateOfReturn: string;
}

export interface IBooking {
  uuid: string;
  rentingStartDate: string;
  maxDateOfreturnBook: string;
  cashPenaltyForLate: number;
}

export default class Booking implements IBooking {
  uuid = uuidv4();
  rentingStartDate: string = moment().format("L");
  maxDateOfreturnBook: string = moment().subtract(8, "days").format("L");
  cashPenaltyForLate: number = 0;
  constructor() {}
  rentBook(book: IBook, user: string): IbookingBook {
    // Validator.checkIfStringIsEmpty(user);
    const bookingBook: IbookingBook = {
      bookingId: this.uuid,
      uuid: book.uuid,
      status: "active",
      title: book.title,
      author: book.author,
      user: user,
      startDate: this.rentingStartDate,
      maxDateOfReturn: this.maxDateOfreturnBook,
    };
    return bookingBook;
  }
}
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
