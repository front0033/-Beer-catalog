import ApiClient from './ApiClient';

interface IVolume {
  value: number;
  unit: string;
}
interface IBeerDTO {
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
  image_url: string;
  ph: number | null;
  srm: number | null;
  target_fg: number;
  target_og: number;
  volume: IVolume;
}

const beerApi = {
  get: () => ApiClient.get<{data: IBeerDTO[]}>(`/beers`),
  getById: (id: string) => ApiClient.get<{data: IBeerDTO}>(`/beers/${id}`),
};

export default beerApi;
