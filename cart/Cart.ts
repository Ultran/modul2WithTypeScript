import { v4 as uuidv4 } from "uuid";
import Item from "./Item.js";

function checkIfObjectIsInstanceOfClass(instance, object) {
  if (!instance instanceof object) {
    throw new Error("item is not a instance of Class Item");
  }
}

class Cart {
  uuid: any;
  constructor() {
    this.uuid = uuidv4();
    this.items = [];
    this.discountValue = 0;
    this.discountCode = null;

    this.sum = {
      price: 0,
      quantity: 0,
      discount: 0,
    };
  }

  addItemToCart(item) {
    checkIfObjectIsInstanceOfClass(item, Item);
    const index = this.items.findIndex((e) => e.uuid === item.uuid);

    if (index === -1) {
      this.items.push(item);
    } else {
      item.quantity = item.quantity + 1;
    }
  }

  removeItemfromCart(item) {
    checkIfObjectIsInstanceOfClass(item, Item);
    const index = this.items.findIndex((e) => e.uuid === item.uuid);
    if (index === -1) {
      throw new Error("product is not in cart, or has been deleted already");
    }
    this.items.splice(index, 1);
  }

  changeQuantity(item, qty) {
    checkIfObjectIsInstanceOfClass(item, Item);
    item.quantity = qty;
    if (item.quantity <= 0) {
      this.removeItemfromCart(item);
    }
  }

  calculateTotal() {
    // ceny
    // discount
    // qty

    // .reduce(()=>{},{price:0, discount:0, quantity:0})
    // TUTAJ NIE WIEDZIAŁEM O CO CHODZI...
    // poniżej funkcja się sprawdza

    function sum(accumulator, currentValue) {
      const priceToAdd =
        currentValue.price *
        currentValue.quantity *
        (1 - currentValue.discount);
      return accumulator + priceToAdd;
    }
    const finalPrice = this.items.reduce(sum, 0);
    return finalPrice;

    // console.log(`cena twojego koszyka ${finalPrice}`);
  }
}

const cart = new Cart();
const item1 = new Item("sofixy", 100, "obuwie");
const item2 = new Item("pepegi", 150, "obuwie");
item1.setDiscount(0.5);
item2.setDiscount(0.1);
cart.addItemToCart(item1);
cart.addItemToCart(item1);
cart.addItemToCart(item2);
cart.addItemToCart(item2);
cart.addItemToCart(item2);
cart.addItemToCart(item2);
cart.addItemToCart(item2);

console.log(cart.calculateTotal());
// cart.changeQuantity(item1, -1); // - odejmij jedną sztukę

// console.log(cart.calculateTotal());

// Obiekt charakteryzujący przedmiot:

// class CartItem {
// Ma miec: Nazwę, Kategorię, Cenę, Rabat % na przedmiot, uuid
// Ma umożliwiać:
// - modyfikować cenę przedmiotu
// - określać jego rabat procentowy
// - dodawać produkt do kategorii
// - zmianę nazwy, ceny lub rabatu
// }

// Obiekt charakteryzujący koszyk:

// class Cart {
// Ma mieć: uuid, listę wybranych przedmiotów, rabat % na koszyk, kod rabatowy
// Ma umożliwiać:
// - dodawanie/usuwanie przedmiotów do/z koszyka
// - zmianę ilości produktu w koszyku
// - podliczać wartość koszyka uwzględniajac rabaty
