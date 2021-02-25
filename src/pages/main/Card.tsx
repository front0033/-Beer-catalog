import * as React from 'react';

import { IBeer } from 'models/beer';
import { Card } from 'antd';

interface IBeerCardProps {
  data: IBeer;
}

const BeerCard: React.FC<IBeerCardProps> = ({data}) => {
  return (
    <Card title={data.name}>
      <img className="beer-img" src={data.image_url} alt={data.name}/>
      <p>{data.description}</p>
    </Card>
  )
}

export default React.memo(BeerCard);