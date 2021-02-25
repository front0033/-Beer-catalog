import { types } from 'mobx-state-tree';
import Beer, { IBeer } from './beer';

const BeerCollection = types.model({
  items: types.array(Beer),
}).actions((self) => ({
  addBeer: (beer: IBeer) => {
    self.items.push(beer);
  }
}))

export default BeerCollection;