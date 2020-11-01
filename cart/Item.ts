import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";
import { v4 as uuidv4 } from "uuid";
// import Validator from "../Validator.js";
const MAXIMUM_POSSIBLE_DISCOUNT_PCT = 0.8;
export default class Item {
  uuid: string;
  name: string;
  price: number;
  categories: string[];
  discount: number;
  quantity: number;

  constructor(name: string, price: number, categories: string) {
    this.uuid = uuidv4();
    this.name = name;
    this.price = price;
    this.categories = [categories];
    this.discount = 0;
    this.quantity = 1;
  }


  validateDuringUpdate(
    key: "name" | "price" | "discount",
    value: string | number
  ) {
    let valueIsEmpyString: boolean = value === "";
    let valueIsNegativeNumber: boolean = value < 0;
    let valueOfDiscountIsToHigh: boolean = value > MAXIMUM_POSSIBLE_DISCOUNT_PCT


    if (key === "name" && valueIsEmpyString) {
        throw new Error("value is empty") }

if (key === "price" || key === "discount") {
  if (valueIsNegativeNumber) {
    throw new Error("no negative numbers");
}

      if (key === "discount" || value > MAXIMUM_POSSIBLE_DISCOUNT_PCT) {
        throw new Error("discount must be < 0.8 PCT");
      }
    } else if (typeof value === "string" && value !== "") {
      if (key !== "name") {
        throw new Error("not possible key");
      }
    } else throw new Error("invorrect data, check key and value");
  }

  changeNamePriceDiscount(key: "name" | "price" | "discount", value: string | number) {
    this.validateDuringUpdate(key, value);
    Object.assign(this, { [key]: value });
    // this[key] = value;
  }

  addNextCategory(value: string): void {
    const newCategoryToLowerCase = value.toLowerCase();
    const lowercaseCategories = [...this.categories].map((el) =>
      el.toLowerCase()
    );
    const uniques = new Set([...lowercaseCategories, newCategoryToLowerCase]);
    this.categories = Array.from(uniques);
  }
}
