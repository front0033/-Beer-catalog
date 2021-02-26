import { types, flow, applySnapshot } from 'mobx-state-tree';
import beerApi from 'api/beer';
import { ApiErrorsStore } from 'store';
import BeerModel from './Beer';

const BeerCollection = types.model({
  items: types.array(BeerModel),
}).actions((self) => {
  const loadAll = flow(function* loadAll() {
    try {
      const { data } = yield beerApi.get()
      applySnapshot(self.items, data);
    } catch (e) {
      ApiErrorsStore.addError(e)
    }
  });

  return {
    loadAll,
  }
})

export default BeerCollection;