import * as React from 'react';

import { Card } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { initialBeer } from 'models/Beer';
import { BeerDetail } from 'models/BeerDetail';

import './styles.css';


const BeerDetails: React.FC<{}> = () => {
  const { id } = useParams<{id: string}>();
  const item = React.useRef(BeerDetail.create({ ...initialBeer })).current;

  React.useEffect(() => {
    if (id) {
      item.loadById(id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Card title={item.name} actions={[<StarOutlined />]}>
      <div className="beer-card_content">
        <img className="beer-img" src={item.image_url} alt={item.name}/>
        <div className="beer-card_description">
          <p>{item.description}</p>
          <p>{item.description}</p>
          <p>{item.brewers_tips}</p>
          <p>{item.contributed_by}</p>
          <p>{item.first_brewed}</p>
          <p>{item.tagline}</p>
        </div>
      </div>
    </Card>
  )
}

export default observer(BeerDetails);