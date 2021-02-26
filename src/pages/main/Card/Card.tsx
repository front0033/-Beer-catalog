import * as React from 'react';

import { Card } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import routes from 'routes';

import './styles.css';
import { IBeer } from 'models/Beer';

interface IBeerCardProps {
  data: IBeer;
}

const BeerCard: React.FC<IBeerCardProps> = ({data}) => {
  return (
    <Card title={data.name} actions={[<StarOutlined />]}>
      <div className="beer-card_content">
        <img className="beer-img" src={data.image_url} alt={data.name}/>
        <div className="beer-card_description">
          <p>{data.description}</p>
          <Link to={routes.details(String(data.id))}>Details...</Link>
        </div>
      </div>
    </Card>
  )
}

export default React.memo(BeerCard);