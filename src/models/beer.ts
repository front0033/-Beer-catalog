import { types, Instance } from 'mobx-state-tree';

const VolumeModel = types.model({
  value: types.number,
  unit: types.string
})

const Beer = types.model({
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
})

export default Beer;

export interface IBeer extends Instance<typeof Beer> {}