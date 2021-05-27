import { IBeerListParams } from 'api/types';

const menuConfig: Record<string, IBeerListParams> = {
  hard: { abv_gt: 10 },
  middle: { abv_lt: 10, abv_gt: 5 },
  light: { abv_lt: 5 },
  /** start colors */
  lightBlonde: { ebc_gt: 6, ebc_lt: 9 },
  blonde: { ebc_gt: 9, ebc_lt: 12 },
  gold: { ebc_gt: 12, ebc_lt: 20 },
  amber: { ebc_gt: 20, ebc_lt: 30 },
  copper: { ebc_gt: 30, ebc_lt: 45 },
  darkCopper: { ebc_gt: 45, ebc_lt: 75 },
  veryDarkBrown: { ebc_gt: 75, ebc_lt: 120 },
  black: { ebc_gt: 120 },
  /** end colors */
};

export default menuConfig;
