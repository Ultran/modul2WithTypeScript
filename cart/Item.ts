// Obiekt charakteryzujący przedmiot:
// class CartItem {
// Ma miec: Nazwę, Kategorię, Cenę, Rabat % na przedmiot, uuid
// Ma umożliwiać:
// - modyfikować cenę przedmiotu
// - określać jego rabat procentowy
// - dodawać produkt do kategorii
// - zmianę nazwy, ceny lub rabatu
// }

import { v4 as uuidv4 } from "uuid";

const MAXIMUM_POSSIBLE_DISCOUNT_PCT: number = 0.8;

class Item {
  uuid: any;
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

  update(key: string, value: string | number) {
    this[key] = value;
  }

  // tutaj key, value nie działa może interfejs?

  setDiscount(discount: number) {
    if (discount > MAXIMUM_POSSIBLE_DISCOUNT_PCT) {
      throw new Error("discount must be < 0.8 PCT");
    }
    this.discount = discount;
  }

  updatePrice(value: number) {
    this.price = value;
  }
  updateName(value: string) {
    this.name = value;
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

let item = new Item("pepegi", 150, ["obuwie"]);
item.setDiscount(0.5);
item.updatePrice(30);
item.updateName("Jakub");
item.addNextCategory("spodnie");
// item.update("name", "piotr");

export default Item;
