import { types, flow, applySnapshot } from 'mobx-state-tree';
import beerApi from 'api/beer';
import { ApiErrorsStore } from 'store';
import BeerModel from './Beer';
import { RemoteDataModel } from './RemoteData';

const BeerCollection = types
  .compose(
    RemoteDataModel,
    types.model({
      items: types.array(BeerModel),
    })
  )
  .named('BeerCollection')
  .actions((self) => {
    const loadAll = flow(function* loadAll() {
      self.setPending();

      try {
        const { data } = yield beerApi.get();

        setTimeout(() => {
          applySnapshot(self.items, data);
          self.setLoadSuccess();
        }, 2000);
      } catch (e) {
        self.setError();
        ApiErrorsStore.addError(e);
      }
    });

    return {
      loadAll,
    };
  });

export default BeerCollection;
