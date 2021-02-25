import * as React from 'react';

import { IBeer } from 'models/beer';
import { Card } from 'antd';

interface IBeerCardProps {
  data: IBeer;
}

const BeerCard: React.FC<IBeerCardProps> = ({data}) => {
  return (
    <Card title={data.name}>
      <p>{data.description}</p>
      <p>{data.brewers_tips}</p>
      <p>{data.contributed_by}</p>
    </Card>
  )
}

export default React.memo(BeerCard);