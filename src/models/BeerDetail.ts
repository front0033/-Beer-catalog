import beerApi from "api/beer";
import { types, flow, applySnapshot } from "mobx-state-tree";
import { ApiErrorsStore } from "store";

import BaseModel from "./Base";
import BeerModel from "./Beer";


const BeerDetail = types.compose(BaseModel, BeerModel).named('Beer').volatile(() => ({
  selectedCount: 1
})).actions((self) => ({
  setCount(count: number) {
    // eslint-disable-next-line no-param-reassign
    self.selectedCount = count || 1;
  },
  loadById: flow(function* loadById(id: string) {
    try {
      const { data } = yield beerApi.getById(id);
      applySnapshot(self, data[0]);
    } catch (e) {
      ApiErrorsStore.addError(e)
    }
  }),
}));

export default BeerDetail;