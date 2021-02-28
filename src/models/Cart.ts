import { types, Instance } from 'mobx-state-tree';
import BaseModel from './Base';
import BeerModel from './Beer';

export const initialCart = {

}

const CartModel = types.model({
  items: types.array(BeerModel),
  totalPrice: types.maybeNull(types.number),
  address: types.maybeNull(types.string),
});

const Cart = types.compose(BaseModel, CartModel).named('Cart');

export default Cart;

export interface IBeer extends Instance<typeof Cart> {}