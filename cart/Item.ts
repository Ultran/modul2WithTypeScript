import { v4 as uuidv4 } from "uuid";
import Validator from "../validator/Validator";

const MAXIMUM_POSSIBLE_DISCOUNT_PCT: number = 0.8;

interface ItemConstructor {
  new (name: string, price: number, categories: string[]): ItemInterface;
}

interface ItemInterface {
  uuid: string;
  name: string;
  price: number;
  categories: string[];
  discount: number;
  quantity: number;
  addNextCategory(value: string): void;

  // new (name: string, price: number, initialCategory: string[]): void;
  // wszystkie props
  // wszystkie metody
}
class Item implements ItemInterface {
  name: string;
  discount = 0;
  uuid = uuidv4();
  price: number;
  quantity = 1;
  categories: string[];

  constructor(name: string, price: number, categories: string[]) {
    this.name = name;
    this.price = price;
    this.categories = categories;

    // Validator.checkIfStringIsEmpty(name);
    // Validator.checkIfStringIsEmpty(initialCategory);
    // Validator.checkIfInputIsNumber(price);
  }

  // validateDuringUpdate(
  //   key: "name" | "price" | "discount",
  //   value: string | number
  // ) {
  //   // const isNotAvaiableKeys = !["name", "price", "discount"].includes(key);
  //   if (typeof value === "number" && !isNaN(value)) {
  //     if (key === "name") {
  //       throw new Error("not possible key");
  //     }
  //     if (value < 0) {
  //       throw new Error("no negative numbers");
  //     }
  //     if (key === "discount" || value > MAXIMUM_POSSIBLE_DISCOUNT_PCT) {
  //       throw new Error("discount must be < 0.8 PCT");
  //     }
  //   }

  //   if (typeof value === "string" && value !== "") {
  //     if (key !== "name") {
  //       throw new Error("not possible key");
  //     }
  //   }
  // }

  // setValueOfClasProperty(
  //   key: "name" | "price" | "discount",
  //   value: string | number
  // ) {
  //   this.validateDuringUpdate(key, value);
  //   Object.assign(this, { [key]: value });
  // }

  addNextCategory(value: string) {
    Validator.checkIfStringIsEmpty(value);
    const newCategoryToLowerCase: string = value.toLowerCase();
    const lowercaseCategories: string[] = [...this.categories].map((el) =>
      el.toLowerCase()
    );
    const uniques = new Set([...lowercaseCategories, newCategoryToLowerCase]);
    this.categories = Array.from(uniques);
  }
}
let item: any = new Item("pepegi", 150, ["obuwie"]);

export default Item;
