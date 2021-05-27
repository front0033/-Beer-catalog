export const addIdToUrl = (search: string, id: string): string => {
  const queryArray = (search && search.split('?')[1].split('&')) || [];
  if (!queryArray.length) {
    return `?${id}=1`;
  }

  if (queryArray.length) {
    const currentItem = queryArray.map((item) => item.split('=')).find((item) => item[0] === id);

    if (currentItem) {
      return `?${queryArray
        .map((item) => {
          const [currentId, currentCount] = item.split('=');
          if (currentId === id) {
            return `${currentId}=${+currentCount + 1}`;
          }

          return item;
        })
        .join('&')}`;
    }

    return `${search}&${id}=1`;
  }

  return '';
};

export const decrementCountFromIdFromUrl = (search: string, id: string): string => {
  const queryArray = (search && search.split('?')[1].split('&')) || [];

  const currentItem = queryArray.map((item) => item.split('=')).find((item) => item[0] === id);

  if (currentItem) {
    return `?${queryArray
      .map((item) => {
        const [currentId, currentCount] = item.split('=');
        if (currentId === id) {
          return `${currentId}=${+currentCount - 1}`;
        }

        return item;
      })
      .join('&')}`;
  }

  return '';
};

export const removeIdFromUrl = (search: string, id: string): string => {
  const queryArray = (search && search.split('?')[1].split('&')) || [];
  if (id) {
    return queryArray.length
      ? queryArray
          .map((item) => item.split('='))
          .filter((item) => item[0] !== id)
          .map((item, i) => `${i ? '&' : '?'}${item[0]}=${item[1]}`)
          .join('')
      : '';
  }

  return search;
};

export const isExistIdFromUrl = (search: string, id: string): boolean =>
  !!search
    .replace('?', '')
    .split('&')
    .map((item) => item.split('='))
    .find((item) => item[0] === id);

export const getIdsLength = (search: string): number => search.replace('?', '').split('&').length;

export const countByIdFromUrl = (search: string, id: string): number => {
  const current = search
    .replace('?', '')
    .split('&')
    .map((item) => item.split('='))
    .find((item) => item[0] === id);

  return current ? +current[1] : 0;
};
