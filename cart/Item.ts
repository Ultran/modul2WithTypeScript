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
    // varlidacja
    this.uuid = uuidv4();
    this.name = name;
    this.price = price;
    this.categories = initialCategory;
    this.discount = 0;
    this.quantity = 1;
  }

  setValueOfClasProperty(key: string, value: string | number) {
    if (typeof value === "string") {
      Validator.checkIfInputIsNumber(value);
    }

    Object.assign(this, { [key]: value });
  }

  setDiscount(discount: number) {
    if (discount > MAXIMUM_POSSIBLE_DISCOUNT_PCT) {
      throw new Error("discount must be < 0.8 PCT");
    }
    this.discount = discount;
  }

  addNextCategory(value: string) {
    const newCategoryToLowerCase: string = value.toLowerCase();
    const lowercaseCategories: string[] = [...this.categories].map((el) =>
      el.toLowerCase()
    );
    const uniques = new Set([...lowercaseCategories, newCategoryToLowerCase]);
    this.categories = Array.from(uniques);
  }
}

let item: any = new Item("pepegi", 150, ["obuwie"]);
// console.log(Object.keys(item));
item.setDiscount(0.5);
item.updatePrice(30);
item.updateName("Jakub");
item.addNextCategory("spodnie");
item.update("price", 30);
// console.log(item);

export default Item;
