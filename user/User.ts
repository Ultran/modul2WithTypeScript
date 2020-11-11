import is from "is_js";
import moment from "moment";
import Validator from "../validator/Validator";

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
    // Validator.checkIfStringIsEmpty(name);
    // Validator.checkIfStringIsEmpty(surname);
    // Validator.checkIfStringIsEmpty(password);
    // Validator.checkIfDateIsValid(birth);
    // Validator.checkPassword(password);
    // Validator.checkEmailAdressIsValid(email);
    // Validator.checkIfDataIsInArray(accessLevel, ["user", "admin"]);
    // Validator.checkIfDataIsInArray(gender, ["male", "female"]);

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

//     Ma mieć: Imię, Nazwisko, datę urodzenia, haslo, płeć, adres email, poziom dostepu = ""user""
//     Ma umożliwiać: zmianę email, zmianę hasła

// Dodatkowo User ma mieć walidacje wykonaną za pomocą is.js oraz datę obsługiwaną przez bibliotekę moment.js
// - email ma być poprawnym emailem
// - password ma mieć min 8 znaków, co najmniej jedną wielką literę i co najmniej jedną cyfrę oraz co najmniej 1 znak specjalny
// - płeć musi być ze zbioru [male, female]
// - data (nieważne jaka wejdzie) do propa musi wejść w formacie MM/DD/YYYY
// - imię i nazwisko musi być niepuste
// jeśli któraś z walidacji się nie powiedzie obiekt ma nie być tworzony, tylko ma zwracać error z odpowiednimi komunikatami o niepowiedzionej walidacji
