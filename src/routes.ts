const routes = {
  main: () => '/',
  details: (id = ':id') => `/details/${id}`,
};

export default routes;
