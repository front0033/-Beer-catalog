import BeerCollection from "models/beerColection";
import ApiErrors from "models/ApiErrors";

export const BeerCollectionStore = BeerCollection.create({items: []});
export const ApiErrorsStore = ApiErrors.create({ errors: [] });