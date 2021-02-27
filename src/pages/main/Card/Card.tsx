import * as React from 'react';

import { Card, Skeleton } from 'antd';
import { PlusCircleOutlined, StarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import routes from 'routes';

import './styles.css';
import { IBeer } from 'models/Beer';

interface IBeerCardProps {
  data: IBeer;
}

const { Meta } = Card;

const BeerCard: React.FC<IBeerCardProps> = ({data}) => {
  return (
    <Card title={data.name} actions={[
      <StarOutlined />,
      <PlusCircleOutlined />,
      <Link to={routes.details(String(data.id))}>Details...</Link>
      ]}>
      <Skeleton loading={!data} avatar active>
        <Meta
          avatar={<img className="beer-img" src={data.image_url} alt={data.name}/>}
          title={data.name}
          description={data.description}
        />
      </Skeleton>
    </Card>
  )
}

export default React.memo(BeerCard);