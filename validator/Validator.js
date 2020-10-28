// import is from "is_js";
// import moment from "moment";

// export default class Validator {
//   static checkIfStringIsEmpty(e) {
//     if (typeof e !== "string" || e === "") {
//       throw new Error("Input is empty or used wrong characters");
//     }
//   }

//   static checkIfInputIsNumber(e) {
//     if (typeof e !== "number" || isNaN(e)) {
//       throw new Error("is not a number");
//     }
//   }

//   static checkPassword(password) {
//     if (
//       !password.match(/[a-z]/g) ||
//       !password.match(/[A-Z]/g) ||
//       !password.match(/[0-9]/g) ||
//       password.length < 8
//     ) {
//       throw new Error("incorrect password");
//     }
//   }

//   static checkIfDateIsValid(e) {
//     if (!moment(e, "DD/MM/YYYY").isValid()) {
//       throw new Error("date is not valid");
//     }
//   }
//   static checkEmailAdressIsValid(e) {
//     if (is.not.email(e)) {
//       throw new Error("incorrect email");
//     }
//   }
//   static checkIfDataIsInArray(e, array) {
//     if (!is.inArray(e, array)) {
//       throw new Error(`Not possible`);
//     }
//   }

//   static checkIfInputIsInstanceOfObject(input, object) {
//     if (!input instanceof object) {
//       throw new Error("item is not a instance of its Class");
//     }
//   }
// }
