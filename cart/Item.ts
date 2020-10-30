import { v4 as uuidv4 } from "uuid";
import Validator from "../validator/Validator";

const MAXIMUM_POSSIBLE_DISCOUNT_PCT: number = 0.8;

class Item {
  uuid: string;
  name: string;
  price: number;
  categories: string[];
  discount: number;
  quantity: number;

  constructor(name: string, price: number, initialCategory: string[]) {
    Validator.checkIfStringIsEmpty(name);
    Validator.checkIfStringIsEmpty(initialCategory);
    Validator.checkIfInputIsNumber(price);

    this.uuid = uuidv4();
    this.name = name;
    this.price = price;
    this.categories = initialCategory;
    this.discount = 0;
    this.quantity = 1;
  }

  validateDuringUpdate(key: string, value: string | number) {
    const isNotAvaiableKeys = !["name", "price", "discount"].includes(key);
    if (isNotAvaiableKeys) {
      throw new Error("not available keys");
    } else if (typeof value === "number" && !isNaN(value)) {
      if (key === "name") {
        throw new Error("not possible key");
      }
      if (value < 0) {
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

  setValueOfClasProperty(key: string, value: string | number) {
    this.validateDuringUpdate(key, value);
    Object.assign(this, { [key]: value });
  }

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
item.addNextCategory("spodnie");
item.setValueOfClasProperty("price", 30);

export default Item;
