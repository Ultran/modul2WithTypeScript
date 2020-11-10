import moment from "moment";
import fs from "fs";
// BOOK

const fileWithPhotos = fs.readdirSync("./Library/Photos");
export const randomPhoto =
  fileWithPhotos[Math.floor(Math.random() * fileWithPhotos.length)];

export const isJpg: boolean = is.endWith(randomPhoto, ".jpg");

// Booking

// Library
