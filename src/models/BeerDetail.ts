import beerApi from 'api/beer';
import { types, flow, applySnapshot, Instance } from 'mobx-state-tree';
import { ApiErrorsStore } from 'store';

import BaseModel from './Base';
import BeerModel from './Beer';
import { RemoteDataModel } from './RemoteData';

const BeerDetail = types
  .compose(BaseModel, RemoteDataModel, BeerModel)
  .named('Beer')
  .actions((self) => ({
    loadById: flow(function* loadById(id: string) {
      self.setPending();
      try {
        const { data } = yield beerApi.getById(id);
        self.setLoadSuccess();
        applySnapshot(self, data[0]);
      } catch (e) {
        self.setError();
        ApiErrorsStore.addError(e);
      }
    }),
  }));

export default BeerDetail;

export interface IBeerDetail extends Instance<typeof BeerDetail> {}
