import { types, Instance } from 'mobx-state-tree';

const Beer = types.model({
  name: types.string,
})

export default Beer;

export interface IBeer extends Instance<typeof Beer> {}