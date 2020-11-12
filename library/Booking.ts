import { IBook } from "./Book";
import { cashPenaltyForOneDayLate } from "./heplers";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

function cashPenalty(booking: IBooking): number {
  const maxDateToReturne: moment.Moment = moment(booking.maxDateOfReturn);
  const realDateOfReturne: moment.Moment = moment();
  const delayInDays: number = realDateOfReturne.diff(maxDateToReturne, "days");
  let cashPenalty: number = 0;
  if (delayInDays > 1) {
    cashPenalty = cashPenaltyForOneDayLate * delayInDays;
  }
  return cashPenalty;
}

export interface IBooking {
  bookingId: string;
  bookId: string;
  status: "active" | "archival";
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
  status: "active" | "archival" = "active";
  title = "";
  author = "";
  user = "";
  rentingStartDate = moment().format("L");
  maxDateOfReturn = moment().subtract(10, "days").format("L");
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
      status: "archival",
      title: booking.title,
      author: booking.author,
      user: booking.user,
      rentingStartDate: booking.rentingStartDate,
      maxDateOfReturn: booking.maxDateOfReturn,
      returneDate: moment().format("L"),
      cashPenaltyForLate: cashPenalty(booking),
    };

    return returnedBooking;
  }
}
