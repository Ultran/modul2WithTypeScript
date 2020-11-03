import { v4 as uuidv4 } from "uuid";
import Item from "./Item";
interface CartInterface {
  uuid: string;
  items: any;
  discountValue: number;
  discountCode: null | number;
  sum: object;
  addItemToCart(item: any): void;
  removeItemfromCart(item: any): void;
  changeQuantity(item: any, qty: number): void;
  calculateTotal(): void;
}
class Cart implements CartInterface {
  uuid: string = uuidv4();
  items: object[] = [];
  discountValue: number = 0;
  discountCode: null | number = null;
  sum: object = {
    price: 0,
    quantity: 0,
    discount: 0,
  };

  constructor() {}

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
    this.sum = this.items.reduce(
      (total: any, currentValue: any) => {
        total.price =
          total.price +
          currentValue.price *
            (1 - currentValue.discount) *
            currentValue.quantity;
        total.discount =
          total.discount +
          currentValue.discount * currentValue.price * currentValue.quantity;
        total.quantity = total.quantity + currentValue.quantity;

        return total;
      },
      { price: 0, discount: 0, quantity: 0 }
    );
  }
}

let cart = new Cart();
let item = new Item("pepegi", 100, "obuwie");
let item2 = new Item("sofixy", 200, "obuwie");
item.changeNamePriceDiscount("discount", 0.5);
cart.addItemToCart(item);
cart.addItemToCart(item2);
cart.changeQuantity(item, 2);

cart.calculateTotal();

export default cart;
