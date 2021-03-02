import { Card, Typography } from 'antd';
import * as React from 'react';
import { CartStore } from 'store';

const BeerCart: React.FC<{}> = () => (
    <Card title="Cart">
      {CartStore.items.map((item) => (
        <Typography key={item.id}>{item.id} : {item.name}</Typography>
      ))}
    </Card>
  )

export default BeerCart;