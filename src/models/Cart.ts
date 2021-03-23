import beerApi from 'api/beer';
import { types, flow, applySnapshot, getSnapshot } from 'mobx-state-tree';
import { ApiErrorsStore } from 'store';
import BaseModel from './Base';
import BeerModel, { IBeer } from './Beer';

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

    const addProduct = (item: IBeer) => {
      const currentProduct = getCurrentProduct(item.id);
      if (currentProduct) {
        currentProduct.incrementCount();
      } else {
        self.items.push(getSnapshot(item));
      }
    };

    const removeItem = (item: IBeer) => {
      self.items.replace([...self.items.toJSON()].filter((product) => product.id !== item.id));
    };

    /** ids most be type: 1|2|3|4 */
    const loadByIds = flow(function* loadById(ids: string) {
      try {
        const { data } = yield beerApi.getByIds(ids);
        applySnapshot(self.items, data);
      } catch (e) {
        ApiErrorsStore.addError(e);
      }
    });

    const generateParamsToCart = () => {
      let params = '';

      self.items.forEach((item, i) => {
        params += `${i ? '&' : '?'}${item.id}=${item.selectedCount}`;
      });

      return params;
    };

    return { addProduct, getCurrentProduct, removeItem, loadByIds, generateParamsToCart };
  });

export default Cart;
