// import { v4 as uuidv4 } from "uuid";
// import is from "is_js";
// import fs from "fs";
// import Validator from "../Validator.js";

// const fileWithPhotos = fs.readdirSync("./Libraryy/Photos");
// const randomPhoto =
//   fileWithPhotos[Math.floor(Math.random() * fileWithPhotos.length)];

// export default class Book {
//   constructor(title, author, description) {
//     this.uuid = uuidv4();
//     Validator.checkIfStringIsEmpty(title);
//     Validator.checkIfStringIsEmpty(author);
//     Validator.checkIfStringIsEmpty(description);

//     if (!is.endWith(randomPhoto, ".jpg")) {
//       throw new Error("you can store only jpg files in file /fileWithPhotos");
//     }
//     this.title = title;
//     this.author = author;
//     this.description = description;
//     this.randomPhoto = randomPhoto;
//   }
// }

// // import isValidPath from "is-valid-path";
// // https://picsum.photos/200/300 - w przypadku placeholderów
