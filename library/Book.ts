import { v4 as uuidv4 } from "uuid";
import Validator from "../validator/Validator";
import is from "is_js";
import fs from "fs";
import { isJpg, randomPhoto } from "./heplers";

export interface IBook {
  uuid: string;
  title: string;
  author: string;
  description: string;
  randomPhoto: string;
}

export default class Book implements IBook {
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
