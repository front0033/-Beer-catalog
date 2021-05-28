/* eslint-disable import/no-named-as-default */
import BeerCollection from 'models/BeerCollection';
import ApiErrors from 'models/ApiErrors';
import Cart from 'models/Cart';
import BreadCrumbsModel from 'models/BreadCrumbs';
import routes from 'routes';

export const BeerCollectionStore = BeerCollection.create({ items: [] });
export const ApiErrorsStore = ApiErrors.create({ errors: [] });
export const CartStore = Cart.create({ items: [] });
export const BreaadCrumbsStore = BreadCrumbsModel.create({
  items: [{ id: 'catalog', label: 'Catalog', link: routes.main() }],
});
