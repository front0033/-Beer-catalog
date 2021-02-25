import ApiClient from './ApiClient';



const beerApi = {
  get: () => {
    return ApiClient.get(`/beers`);
  },
};

export default beerApi;
