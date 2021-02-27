import * as React from 'react';

import { Card, Descriptions } from 'antd';
import { PlusCircleOutlined, ShoppingCartOutlined, StarOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { initialBeer } from 'models/Beer';
import { BeerDetail } from 'models/BeerDetail';

import './styles.css';
import routes from 'routes';


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
    <Card title={item.name} actions={[<StarOutlined />, <PlusCircleOutlined />,<Link to={routes.cart()}><ShoppingCartOutlined title="Add to Cart"/></Link>]}>
      <div className="details-container">
        <img className="details-beer-img" src={item.image_url} alt={item.name}/>
        <Descriptions className="beer-card_description" title="Details" size="middle" column={2}>
          <Descriptions.Item label="Description" span={2}>
            {item.description}
          </Descriptions.Item>
          <Descriptions.Item label="Brewers tips" span={2}>{item.brewers_tips}</Descriptions.Item>
          <Descriptions.Item label="Contributed by" span={1}>{item.contributed_by}</Descriptions.Item>
          <Descriptions.Item label="First brewed">{item.first_brewed}</Descriptions.Item>
          <Descriptions.Item label="Food pairing">
            {item.food_pairing.map((food, i) => <span className="food-span">{food}{item.food_pairing.length === (i + 1) ? '' : ', '}</span>)}
          </Descriptions.Item>
          {/** TODO need add ingredients */}
        </Descriptions>
      </div>
    </Card>
  )
}

export default observer(BeerDetails);