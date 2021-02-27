const routes = {
  main: () => '/',
  details: (id = ':id') => `/details/${id}`,
  cart: () => '/cart',
};

export default routes;
