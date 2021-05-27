import { IBeerListParams } from 'api/types';

type BeerMenuConfig<T extends string> = Record<T, { params: IBeerListParams; label: string }>;

export type BeerStrengthType = 'hard' | 'middle' | 'light';
export type BeerColoursType =
  | 'lightBlonde'
  | 'blonde'
  | 'gold'
  | 'amber'
  | 'copper'
  | 'darkCopper'
  | 'veryDarkBrown'
  | 'black';

export const ABVBeerTypeConfig: BeerMenuConfig<BeerStrengthType> = {
  hard: { params: { abv_gt: 10 }, label: 'Hard' },
  middle: { params: { abv_lt: 10, abv_gt: 5 }, label: 'Middle' },
  light: { params: { abv_lt: 5 }, label: 'Light' },
};

export const ColorBeerTypeConfig: BeerMenuConfig<BeerColoursType> = {
  lightBlonde: { params: { ebc_gt: 6, ebc_lt: 9 }, label: 'Light Blonde' },
  blonde: { params: { ebc_gt: 9, ebc_lt: 12 }, label: 'Blonde (yellow)' },
  gold: { params: { ebc_gt: 12, ebc_lt: 20 }, label: 'Gold' },
  amber: { params: { ebc_gt: 20, ebc_lt: 30 }, label: 'Amber' },
  copper: { params: { ebc_gt: 30, ebc_lt: 45 }, label: 'Copper' },
  darkCopper: { params: { ebc_gt: 45, ebc_lt: 75 }, label: 'Dark Copper / Brown' },
  veryDarkBrown: { params: { ebc_gt: 75, ebc_lt: 120 }, label: 'Very Dark Brown (transparent)' },
  black: { params: { ebc_gt: 120 }, label: 'Black (not transparent)' },
};
