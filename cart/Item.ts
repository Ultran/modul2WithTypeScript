import { v4 as uuidv4 } from "uuid";
import MAXIMUM_POSSIBLE_DISCOUNT_PCT from "./helpers";
import Validator from "../validator/Validator";

type possibleKeys = "name" | "price" | "discount";
type possibleValueTypes = string | number;

export interface IItem {
  uuid: string;
  name: string;
  price: number;
  categories: string[];
  discount: number;
  quantity: number;

  validateDuringChange(key: possibleKeys, value: possibleValueTypes): void;

  changeNamePriceDiscount(key: possibleKeys, value: possibleValueTypes): void;

  addNextCategory(value: string): void;
}

export default class Item implements IItem {
  public uuid = uuidv4();
  public name: string;
  public price: number;
  public categories: string[];
  public discount = 0;
  public quantity = 1;

  constructor(name: string, price: number, initialCategory: string) {
    this.name = name;
    this.price = price;
    this.categories = [initialCategory];
  }

  validateDuringChange(key: possibleKeys, value: possibleValueTypes): void {
    if (typeof value === "number") {
      let numberIsNaN: boolean = isNaN(value);
      let valueIsNegativeNumber: boolean = value < 0;
      let valueOfDiscountIsToHigh: boolean =
        value > MAXIMUM_POSSIBLE_DISCOUNT_PCT;

      if (numberIsNaN || valueIsNegativeNumber || valueOfDiscountIsToHigh) {
        throw new Error("is not a number, is negativ or discount is to high");
      }

      if (key !== "price" && key !== "discount") {
        throw new Error("incorrect key possible -> [price, discount]");
      }
    } else if (typeof value === "string") {
      Validator.checkIfStringIsEmpty(value);
      if (key !== "name") {
        throw new Error("key is incorrect");
      }
    } else {
      throw new Error("incorrect type of value");
    }
  }

  changeNamePriceDiscount(key: possibleKeys, value: possibleValueTypes): void {
    this.validateDuringChange(key, value);
    Object.assign(this, { [key]: value });
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
