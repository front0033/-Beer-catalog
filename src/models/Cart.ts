import beerApi from 'api/beer';
import { types, flow, applySnapshot } from 'mobx-state-tree';
import { ApiErrorsStore } from 'store';
import BaseModel from './Base';
import BeerModel from './Beer';
import { RemoteDataModel } from './RemoteData';

const CartModel = types.model({
  items: types.array(BeerModel),
  totalPrice: types.maybeNull(types.number),
  address: types.maybeNull(types.string),
});

const Cart = types
  .compose(BaseModel, RemoteDataModel, CartModel)
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
      self.setPending();
      try {
        const { data } = yield beerApi.getByIds(ids);

        setTimeout(() => {
          applySnapshot(self.items, data);
          self.setLoadSuccess();
        }, 400);
      } catch (e) {
        ApiErrorsStore.addError(e);
        self.setError();
      }
    });

    return { getCurrentProduct, loadByIds };
  });

export default Cart;
