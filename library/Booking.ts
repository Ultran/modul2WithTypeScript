import { v4 as uuidv4 } from "uuid";
import moment from "moment";
import Book from "./Book";
import { IBook } from "./Book";

const cashPenaltyForOneDayLate = 3;
function daysFromMiliseconds(ms: number) {
  return ms / 100 / 60 / 60 / 24 / 10;
}

export interface IBooking {
  bookingId: string;
  bookId: string;
  status: "active" | "returned";
  title: string;
  author: string;
  user: string;
  maxDateOfReturn: string;
  rentingStartDate: string;
  returneDate: string;
  cashPenaltyForLate: number;
  returnBook?(book: IBooking): IBooking;
}

export default class Booking implements IBooking {
  bookingId = uuidv4();
  bookId = "";
  status: "active" | "returned" = "active";
  title = "";
  author = "";
  user = "";
  rentingStartDate = moment().format("L");
  maxDateOfReturn = moment().subtract(8, "days").format("L");
  returneDate = "";
  cashPenaltyForLate = 0;

  constructor(book: IBook, user: string) {
    this.bookId = book.uuid;
    this.title = book.title;
    this.author = book.author;
    this.user = user;
  }

  returnBook(booking: IBooking): IBooking {
    let returnedBooking: IBooking = {
      bookingId: booking.bookingId,
      bookId: booking.bookId,
      status: "returned",
      title: booking.title,
      author: booking.author,
      user: booking.user,
      rentingStartDate: moment().format("L"),
      maxDateOfReturn: moment().subtract(8, "days").format("L"),
      returneDate: moment().format("L"),
      cashPenaltyForLate: 1000000,
    };
    return returnedBooking;
  }
}
// const maxDateOfReturne: number = book.maxDateOfReturn.getTime();
// let dayOfReturneBook = new Date(moment().format("L"));
// const lateInMs = maxDateOfReturne - dayOfReturneBook.getTime();
// const lateInDays = Math.floor(daysFromMiliseconds(lateInMs));
// if (lateInDays > 0) {
//   this.cashPenaltyForLate = lateInDays * cashPenaltyForOneDayLate;
//   console.log(`Late charge = ${this.cashPenaltyForLate}`);
// }

// const returnedBooking = {
//   bookingId: book.bookingId,
//   uuid: book.uuid,
//   status: "returned",
//   title: book.title,
//   author: book.author,
//   user: user,
//   startDate: this.rentingStartDate,
//   maxDateOfReturn: this.maxDateOfreturnBook,
//   dateOfReturn: dayOfReturneBook,
//   cashPenaltyForLate: this.cashPenaltyForLate,
// };

// return returnedBooking;

// const day = moment(book.startDate).fromNow("m");
// console.log(day);
// const numbers = day.replace(/[^0-9]/g, "") - 7;
// if (numbers > 7 && is.include(day, "days")) {
//   this.cashPenaltyForLate = numbers - 7 * cashPenaltyForOneDayLate;
//   console.log(this.cashPenaltyForLate);
