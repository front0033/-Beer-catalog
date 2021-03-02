import { Card, Typography } from 'antd';
import { observer } from 'mobx-react';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { CartStore } from 'store';

const BeerCart: React.FC<{}> = () => {
  const { search } = useLocation();

  React.useEffect(() => {
    const queryArray = search.split('?')[1].split('&');

    let ids: string = '';
    const counts: number[]  = []
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

  return (
    <Card title="Cart">
      {CartStore.items.map((item) => (
        <Typography key={item.id}>{item.id} : {item.name} : {item.selectedCount}</Typography>
      ))}
    </Card>
  )
}

export default observer(BeerCart);