import beerApi from 'api/beer';
import { types, flow, applySnapshot } from 'mobx-state-tree';
import { ApiErrorsStore } from 'store';
import BaseModel from './Base';
import BeerModel from './Beer';

const CartModel = types.model({
  items: types.array(BeerModel),
  totalPrice: types.maybeNull(types.number),
  address: types.maybeNull(types.string),
});

const Cart = types
  .compose(BaseModel, CartModel)
  .named('Cart')
  .views((self) => ({
    get count() {
      return self.items.toJSON().length;
    },
  }))
  .actions((self) => {
    const getCurrentProduct = (id: number) => self.items.toJSON().find((product) => product.id === id);

    /** ids most be type: 1|2|3|4 */
    const loadByIds = flow(function* loadById(ids: string) {
      try {
        const { data } = yield beerApi.getByIds(ids);
        applySnapshot(self.items, data);
      } catch (e) {
        ApiErrorsStore.addError(e);
      }
    });

    return { getCurrentProduct, loadByIds };
  });

export default Cart;
