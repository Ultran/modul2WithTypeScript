import { v4 as uuidv4 } from "uuid";
import Validator from "../validator/Validator";
import is from "is_js";
import fs from "fs";
// import Validator from "../Validator.js";

const fileWithPhotos = fs.readdirSync("./Library/Photos");
const randomPhoto =
  fileWithPhotos[Math.floor(Math.random() * fileWithPhotos.length)];

let isJpg: boolean = is.endWith(randomPhoto, ".jpg");

interface BookInterface {
  title: string;
  author: string;
  description: string;
  uuid: string;
  randomPhoto: any;
}

export default class Book implements BookInterface {
  public uuid = uuidv4();
  public title: string;
  public author: string;
  public description: string;
  public randomPhoto: any;
  constructor(title: string, author: string, description: string) {
    Validator.checkIfStringIsEmpty(title);
    Validator.checkIfStringIsEmpty(author);
    Validator.checkIfStringIsEmpty(description);
    if (!isJpg) {
      throw new Error("you can store only jpg files in file /fileWithPhotos");
    }
    this.title = title;
    this.author = author;
    this.description = description;
    this.randomPhoto = randomPhoto;
  }
}

// //import isValidPath from "is-valid-path";
// // https://picsum.photos/200/300 - w przypadku placeholderów

// Obiekt charakteryzujący książkę:
// class Book {
// Ma miec: Tytuł, Autora, uuid, losowe zdjęcie oraz krótki opis
// }
