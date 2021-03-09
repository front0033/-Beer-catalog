const routes = {
  main: () => '/',
  details: (id = ':id') => `/details/${id}`,
  cart: () => '/cart',
  order: () => '/order',
};

export default routes;
