import { v4 as uuidv4 } from "uuid";
import MAXIMUM_POSSIBLE_DISCOUNT_PCT from "./helpers";

interface itemInterface {
  uuid: string;
  name: string;
  price: number;
  categories: string[];
  discount: number;
  quantity: number;

  validateDuringChange(
    key: "name" | "price" | "discount",
    value: string | number
  ): void;
  changeNamePriceDiscount(
    key: "name" | "price" | "discount",
    value: string | number
  ): void;
  addNextCategory(value: string): void;
}

// CZEMU WŁAŚCIWOŚĆI NIE WYSWIETLAJA SIE PO KOLEI???/???????>>>????/

export default class Item implements itemInterface {
  public uuid: string = uuidv4();
  public name: string;
  public price: number;
  public categories: string[];
  public discount: number = 0;
  public quantity: number = 1;

  constructor(name: string, price: number, categories: string) {
    this.name = name;
    this.price = price;
    this.categories = [categories];
  }

  validateDuringChange(
    key: "name" | "price" | "discount",
    value: string | number
  ): void {
    let valueIsEmpyString: boolean = value === "";
    let valueIsNegativeNumber: boolean = value < 0;
    let valueOfDiscountIsToHigh: boolean =
      value > MAXIMUM_POSSIBLE_DISCOUNT_PCT;

    if (key === "name" && valueIsEmpyString) {
      throw new Error("value is empty");
    }
    if ((typeof value === "number" && isNaN(value)) || valueIsNegativeNumber) {
      throw Error("value is NaN or under 0");
    }
    if (key === "discount" && valueOfDiscountIsToHigh) {
      throw new Error("discount must be < 0.8 PCT");
    }
  }

  changeNamePriceDiscount(
    key: "name" | "price" | "discount",
    value: string | number
  ): void {
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
