import * as React from 'react';

import { CartStore } from 'store';

const useLoadPruductByQueryUrl = (search: string) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(() => {
    const queryArray = (search && search.split('?')[1].split('&')) || [];

    let ids: string = '';
    const counts: number[] = [];
    queryArray.forEach((param, i) => {
      const [key, value] = param.split('=');
      ids += `${key}${i < queryArray.length ? '|' : ''}`;
      counts.push(+value);
    });

    CartStore.loadByIds(ids).then(() => {
      CartStore.items.forEach((item, i) => {
        item.setCount(counts[i]);
      });
    });
  }, [search]);
};

export default useLoadPruductByQueryUrl;
