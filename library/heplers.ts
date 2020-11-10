import moment from "moment";
import fs from "fs";
import is from "is_js";

// BOOK

const fileWithPhotos = fs.readdirSync("./Library/Photos");
export const randomPhoto =
  fileWithPhotos[Math.floor(Math.random() * fileWithPhotos.length)];

export const isJpg: boolean = is.endWith(randomPhoto, ".jpg");

// Booking
export const cashPenaltyForOneDayLate: number = 3;

// Library
