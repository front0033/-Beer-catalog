import { types, flow, applySnapshot } from 'mobx-state-tree';
import beerApi from 'api/beer';
import { ApiErrorsStore } from 'store';
import { IBeerListParams } from 'api/types';
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
    const loadByParams = flow(function* loadAll(params: IBeerListParams = {}) {
      self.setPending();

      try {
        const { data } = yield beerApi.get(params);

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
      loadByParams,
    };
  });

export default BeerCollection;
