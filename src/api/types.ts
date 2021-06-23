interface IVolume {
  value: number;
  unit: string;
}

export interface IBeerDTO {
  id: number;
  name: string;
  tagline: string;
  abv: number;
  attenuation_level: number;
  boil_volume: IVolume;
  brewers_tips: string;
  contributed_by: string;
  description: string;
  ebc: number | null;
  first_brewed: string;
  food_pairing: string[];
  ibu: number | null;
  image_url: string | null;
  ph: number | null;
  srm: number | null;
  target_fg: number;
  target_og: number;
  volume: IVolume;
}
/**
 * ABV - крепость пива
 * OBU - горчинка
 * EBC - цвет пива
 *   6 - 9 EBC: Pale to light blonde, for example Kompaan Kameraad (7 EBC)
 *   9 - 12 EBC: Blonde - yellow
 *   12 - 20 EBC: Gold
 *   20 - 30 EBC: Amber, for example De Koninck APA, (30 EBC)
 *   30 - 45 EBC: Copper
 *   45 - 75 EBC: Dark copper / brown
 *   75 - 120 EBC: Very dark brown, transparent
 *   > 120 EBC: Black, not transparent, such as De Molen Hel & Verdoemenis (297 EBC)
 * yeast - дрожжи
 * hops - хмель
 * malt - солод
 */

/**
 * abv_gt (number) -  Returns all beers with ABV greater than the supplied number
 * abv_lt (number) - Returns all beers with ABV less than the supplied number
 * ibu_gt (number) - Returns all beers with IBU greater than the supplied number
 * ibu_lt (number) - Returns all beers with IBU less than the supplied number
 * ebc_gt (number) - Returns all beers with EBC greater than the supplied number
 * ebc_lt (number) - Returns all beers with EBC less than the supplied number
 * beer_name (string) - Returns all beers matching the supplied name (this will
 *    match partial strings as well so e.g punk will return Punk IPA),
 *    if you need to add spaces just add an underscore (_).
 * yeast (string)  - Returns all beers matching the supplied yeast name, this
 *    performs a fuzzy match, if you need to add spaces just add an underscore (_).
 * brewed_before (date) - Returns all beers brewed before this date, the date format is mm-yyyy e.g 10-2011
 * brewed_after (date) - Returns all beers brewed after this date, the date format is mm-yyyy e.g 10-2011
 * hops (string) - Returns all beers matching the supplied hops name, this performs a fuzzy match,
 *    if you need to add spaces just add an underscore (_).
 * malt (string) - Returns all beers matching the supplied malt name, this performs a
 *    fuzzy match, if you need to add spaces just add an underscore (_).
 * food - Returns all beers matching the supplied food string, this performs a fuzzy
 *    match, if you need to add spaces just add an underscore (_).
 * ids - Returns all beers matching the supplied ID's. You can pass in multiple ID's
 *  by separating them with a | symbol.
 */

export enum ParamsNames {
  abv_gt = 'abv_gt',
  abv_lt = 'abv_lt',
  ibu_gt = 'ibu_gt',
  ibu_lt = 'ibu_lt',
  ebc_gt = 'ebc_gt',
  ebc_lt = 'ebc_lt',
  beer_name = 'beer_name',
  yeast = 'yeast',
  brewed_before = 'brewed_before',
  brewed_after = 'brewed_after',
  hops = 'hops',
  malt = 'malt',
  food = 'food',
  ids = 'ids',
}

export type TBeerListParams = Partial<Record<ParamsNames, string | number>>;
