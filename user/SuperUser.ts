import User from "./User";
import IUser from "./User";
import Validator from "../validator/Validator";
import is from "is_js";

class SuperUser extends User implements IUser {
  constructor(
    name: string,
    surname: string,
    birth: string,
    password: string,
    gender: string,
    email: string
  ) {
    super(name, surname, birth, password, gender, email);
    this.accessLevel = "admin";
  }

  changeUserPassword(user: IUser, newPassword: string) {
    Validator.checkPassword(newPassword);
    user.password = newPassword;
  }

  userAccessUpgrade(user: IUser, newAccess: "user" | "admin"): void {
    if (user.accessLevel !== "user") {
      throw new Error("as an admin you can't change password of other admins");
    }
    Validator.checkIfStringIsEmpty(newAccess);
    Validator.checkIfDataIsInArray(newAccess.toLowerCase(), ["admin", "user"]);
    user.accessLevel = newAccess;
  }
}

const user = new User(
  "Antoni",
  "Kowalski",
  "12-12-1990",
  "aaaaaA2!",
  "male",
  "antos@gmail.com"
);

const superUser = new SuperUser(
  "Super",
  "Admin",
  "10-10-1960",
  "aaaaaA2!",
  "female",
  "antos@gmail.com"
);

superUser.changeUserPassword(user, "Addd444!");
superUser.userAccessUpgrade(user, "admin");

console.log(user);

// superUser.userAccessUpgrade(user, "admin");
// 5b 2///

export default superUser;

// // superUser.changeUserPassword(user, "bbaaaA2!");

// // Obiekt ten ma dziedziczyć po użytkowniku informacje z dodatkowymi możliwościami
// // Ma Miec: poziom dostepu dla siebie = "admin"
// // Ma umożliwiać: zmieniać w obiekcie użytkownik poziom dostępu na "admin", oraz
// // modyfikować jego hasło
