import { types, flow, applySnapshot } from 'mobx-state-tree';
import Beer, { IBeer } from './beer';
import beerApi from 'api/beer';
import { ApiErrorsStore } from 'store';

const BeerCollection = types.model({
  items: types.array(Beer),
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
    addBeer: (beer: IBeer) => {
      self.items.push(beer);
    },
    loadAll,
  }
})

export default BeerCollection;