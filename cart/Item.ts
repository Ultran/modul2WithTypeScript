import { v4 as uuidv4 } from "uuid";
import MAXIMUM_POSSIBLE_DISCOUNT_PCT from "./helpers";

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

// CZEMU WŁAŚCIWOŚĆI NIE WYSWIETLAJA SIE PO KOLEI???/???????>>>????/

export default class Item implements IItem {
  public uuid = uuidv4();
  public name;
  public price;
  public categories: string[];
  public discount = 0;
  public quantity = 1;

  constructor(name: string, price: number, initialCategory: string) {
    this.name = name;
    this.price = price;
    this.categories = [initialCategory];
  }

  validateDuringChange(key: possibleKeys, value: possibleValueTypes): void {
    let valueIsNegativeNumber: boolean = value < 0;

    let valueOfDiscountIsToHigh: boolean =
      value > MAXIMUM_POSSIBLE_DISCOUNT_PCT;

    if (key === "name") {
      let valueIsEmpyString: boolean = value === "";

      throw new Error("value is empty");
    }
    // do poprawy
    // if('price', 'discount'){}

    if ((typeof value === "number" && isNaN(value)) || valueIsNegativeNumber) {
      throw Error("value is NaN or under 0");
    }
    if (key === "discount" && valueOfDiscountIsToHigh) {
      throw new Error("discount must be < 0.8 PCT");
    }
  }

  changeNamePriceDiscount(key: possibleKeys, value: possibleValueTypes): void {
    this.validateDuringChange(key, value);
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
