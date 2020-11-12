import Validator from "../validator/Validator";
import moment from "moment";

interface IUser {
  name: string;
  surname: string;
  birth: string;
  password: string;
  gender: string;
  email: string;
  accessLevel: "user" | "admin";
}

export default class User implements IUser {
  name: string;
  surname: string;
  birth: string;
  password: string;
  gender: string;
  email: string;
  accessLevel: "user" | "admin" = "user";

  constructor(
    name: string,
    surname: string,
    birth: string,
    password: string,
    gender: string,
    email: string
  ) {
    Validator.checkIfStringIsEmpty(name);
    Validator.checkIfStringIsEmpty(surname);
    Validator.checkIfStringIsEmpty(password);
    Validator.checkIfDateIsValid(birth);
    Validator.checkPassword(password);
    Validator.checkEmailAdressIsValid(email);
    Validator.checkIfDataIsInArray(this.accessLevel, ["user", "admin"]);
    Validator.checkIfDataIsInArray(gender, ["male", "female"]);

    this.name = name;
    this.surname = surname;
    this.birth = moment(birth).format("L");
    this.password = password;
    this.gender = gender;
    this.email = email;
  }
}

const libraryClient = new User(
  "Antoni",
  "Kowalski",
  "12-12-1990",
  "aaaaaA2!",
  "male",
  "antos@gmail.com"
);
