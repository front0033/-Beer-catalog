/* eslint-disable no-param-reassign */
import { types, Instance } from 'mobx-state-tree';

export const initialBeer = {
  id: 0,
  name: '',
  tagline: '',
  abv: 0,
  attenuation_level: 0,
  boil_volume: { value: 0, unit: '' },
  brewers_tips: '',
  contributed_by: '',
  description: '',
  ebc: null,
  first_brewed: '',
  food_pairing: [],
  ibu: null,
  image_url: '',
  ph: null,
  srm: null,
  target_fg: 0,
  target_og: 0,
  volume: { value: 0, unit: '' },
};

const VolumeModel = types.model({
  value: types.number,
  unit: types.string,
});

const BeerModel = types
  .model({
    id: types.number,
    name: types.string,
    tagline: types.string,
    abv: types.number,
    attenuation_level: types.number,
    boil_volume: VolumeModel,
    brewers_tips: types.string,
    contributed_by: types.string,
    description: types.string,
    ebc: types.maybeNull(types.number),
    first_brewed: types.string,
    food_pairing: types.array(types.string),
    ibu: types.maybeNull(types.number),
    image_url: types.string,
    ph: types.maybeNull(types.number),
    srm: types.maybeNull(types.number),
    target_fg: types.number,
    target_og: types.number,
    volume: VolumeModel,
    // selectedCount - select for Cart
    selectedCount: types.optional(types.number, 1),
  })
  .actions((self) => ({
    setCount(count: number) {
      self.selectedCount = count || 1;
    },
    incrementCount() {
      self.selectedCount += 1;
    },
    decrementCount() {
      self.selectedCount -= 1;
    },
  }));

export default BeerModel;

export interface IBeer extends Instance<typeof BeerModel> {}
