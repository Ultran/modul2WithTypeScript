import { v4 as uuidv4 } from "uuid";
import MAXIMUM_POSSIBLE_DISCOUNT_PCT from "./helpers";

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
