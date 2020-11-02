import { v4 as uuidv4 } from "uuid";
import Item from "./Item";

class Cart {
  uuid: string;
  items: any;
  discountValue: number;
  discountCode: null | number;
  sum: object;

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

  addItemToCart(item: any): void {
    const index: number = this.items.findIndex(
      (e: any): boolean => e.uuid === item.uuid
    );
    if (index === -1) {
      this.items.push(item);
    } else {
      item.quantity = item.quantity + 1;
    }
  }

  removeItemfromCart(item: any): void {
    const index = this.items.findIndex((e: any) => e.uuid === item.uuid);
    if (index === -1) {
      throw new Error("product is not in cart, or has been deleted already");
    }
    this.items.splice(index, 1);
  }

  changeQuantity(item: any, qty: number): void {
    item.quantity = qty;
    if (item.quantity <= 0) {
      this.removeItemfromCart(item);
    }
  }

  calculateTotal(): void {
    let array = this.items;

    array.reduce((total: any, currentValue: any) => {
      let priceOfItem =
        currentValue.price *
        (1 - currentValue.discount) *
        currentValue.quantity;
      return total + priceOfItem;
    }, 0);
  }

  sumOfPrice() {
    this.sum.price = this.calculateTotal();
  }
}

let cart = new Cart();
let item = new Item("pepegi", 50, "obuwie");
let item2 = new Item("sofixy", 200, "obuwie");
item.changeNamePriceDiscount("discount", 0.7);
cart.addItemToCart(item);
cart.addItemToCart(item2);
cart.changeQuantity(item, 70);

cart.calculateTotal();

export default cart;
