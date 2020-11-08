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
  status: "active" | "returned";
  title: string;
  author: string;
  user: string;
  maxDateOfReturn: string;
  rentingStartDate: string;
  returneDate: string;
  cashPenaltyForLate: number;
}

export default class Booking implements IBooking {
  bookingId = uuidv4();
  bookiId = "";
  status: "active" | "returned" = "active";
  title = "";
  author = "";
  user = "";
  rentingStartDate = moment().format("L");
  maxDateOfReturn = moment().subtract(8, "days").format("L");
  returneDate = "";
  cashPenaltyForLate = 0;
  constructor() {}

  rentBook(book: IBook, user: string) {
    const renting = {
      bookingId: this.bookingId,
      status: this.status,
      title: book.title,
      author: book.author,
      user: user,
      startDate: this.rentingStartDate,
      maxDateOfReturn: this.maxDateOfReturn,
    };
    return renting;
  }
    returnBook(book: any, user: string) {
      const maxDateOfReturne: number = book.maxDateOfReturn.getTime();
      let dayOfReturneBook = new Date(moment().format("L"));
      const lateInMs = maxDateOfReturne - dayOfReturneBook.getTime();
      const lateInDays = Math.floor(daysFromMiliseconds(lateInMs));
      if (lateInDays > 0) {
        this.cashPenaltyForLate = lateInDays * cashPenaltyForOneDayLate;
        console.log(`Late charge = ${this.cashPenaltyForLate}`);
      }

      const returnedBooking = {
        bookingId: book.bookingId,
        uuid: book.uuid,
        status: "returned",
        title: book.title,
        author: book.author,
        user: user,
        startDate: this.rentingStartDate,
        maxDateOfReturn: this.maxDateOfreturnBook,
        dateOfReturn: dayOfReturneBook,
        cashPenaltyForLate: this.cashPenaltyForLate,
      };

  //     return returnedBooking;
  // }
}

// const day = moment(book.startDate).fromNow("m");
// console.log(day);
// const numbers = day.replace(/[^0-9]/g, "") - 7;
// if (numbers > 7 && is.include(day, "days")) {
//   this.cashPenaltyForLate = numbers - 7 * cashPenaltyForOneDayLate;
//   console.log(this.cashPenaltyForLate);
