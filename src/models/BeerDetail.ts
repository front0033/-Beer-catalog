import beerApi from "api/beer";
import { types, flow, applySnapshot } from "mobx-state-tree";
import { ApiErrorsStore } from "store";

import BaseModel from "./Base";
import BeerModel from "./Beer";

const BeerDetail = types.compose(BaseModel, BeerModel).named('Beer').actions((self) => ({
  loadById: flow(function* loadById(id: string) {
    try {
      const { data } = yield beerApi.getById(id);
      applySnapshot(self, data[0]);
    } catch (e) {
      ApiErrorsStore.addError(e);
    }
  }),
}));

export default BeerDetail;