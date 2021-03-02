import { types, Instance } from 'mobx-state-tree';
import BaseModel from './Base';

export const CartItem = types.model({
  id: types.number,
  count: types.number,
});

interface ICartItem extends Instance<typeof CartItem> {}

const CartModel = types.model({
  items: types.array(CartItem),
  totalPrice: types.maybeNull(types.number),
  address: types.maybeNull(types.string),
});

const Cart = types.compose(BaseModel, CartModel).named('Cart').views((self) => ({
  get count() {
    return self.items.toJSON().length;
  }
})).actions((self) => {
  const isExistProduct = (id: number): boolean =>!!self.items.toJSON().find((product) => product.id === id);

  const addProduct = (item: ICartItem) => {
    if (isExistProduct(item.id)) {
      self.items.replace([...self.items.toJSON()].map((product) => product.id === item.id ? item : product));
    } else {
      self.items.push(item);
    }
  }

  const removeItem = (id: number) => {
    self.items.replace([...self.items.toJSON()].filter((product) => product.id !== id));
  }


  return {addProduct, isExistProduct, removeItem}
});

export default Cart;

export interface IBeer extends Instance<typeof Cart> {}