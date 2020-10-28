// import is from "is_js";
// import User from "./User.js";
// import Validator from "../Validator.js";

// class SuperUser extends User {
//   constructor() {
//     super(...arguments);
//     this.accessLevel = "admin";
//   }

//   changeUserPassword(user, newPassword) {
//     Validator.checkIfInputIsInstanceOfObject(user, User);
//     Validator.checkPassword(newPassword);
//     user.password = newPassword;
//   }

//   userAccessUpgrade(user, newAccess) {
//     Validator.checkIfInputIsInstanceOfObject(user, User);
//     if (user.accessLevel !== "user") {
//       throw new Error("as an admin you can't change password of other admins");
//     }
//     Validator.checkIfStringIsEmpty(newAccess);
//     Validator.checkIfDataIsInArray(newAccess.toLowerCase(), ["admin", "user"]);
//     user.accessLevel = newAccess;
//   }
// }

// const user = new User(
//   "Antoni",
//   "Kowalski",
//   "12-12-1990",
//   "aaaaaA2!",
//   "male",
//   "antos@gmail.com",
//   "user"
// );

// const superUser = new SuperUser(
//   "Super",
//   "Admin",
//   "10-10-1960",
//   "aaaaaA2!",
//   "female",
//   "antos@gmail.com",
//   "admin"
// );

// superUser.userAccessUpgrade(user, "admin");

// // superUser.changeUserPassword(user, "bbaaaA2!");

// // Obiekt ten ma dziedziczyć po użytkowniku informacje z dodatkowymi możliwościami
// // Ma Miec: poziom dostepu dla siebie = "admin"
// // Ma umożliwiać: zmieniać w obiekcie użytkownik poziom dostępu na "admin", oraz
// // modyfikować jego hasło
