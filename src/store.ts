/* eslint-disable import/no-named-as-default */
import BeerCollection from 'models/BeerCollection';
import ApiErrors from 'models/ApiErrors';
import Cart from 'models/Cart';

export const BeerCollectionStore = BeerCollection.create({ items: [] });
export const ApiErrorsStore = ApiErrors.create({ errors: [] });
export const CartStore = Cart.create({ items: [] });
