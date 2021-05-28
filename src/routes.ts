const routes = {
  main: () => '/',
  mainWithCategory: (category = ':category') => `/${category}`,
  details: (category = ':category', id = ':id') => `/${category}/details/${id}`,
  cart: (category = ':category') => `/${category}/cart`,
  order: (category = ':category') => `/${category}/order`,
};

export default routes;
