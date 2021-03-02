import * as React from 'react';

import { Button, Card, Descriptions, Typography } from 'antd';
import { DeleteOutlined, MinusOutlined, PlusCircleOutlined, PlusOutlined, ShoppingCartOutlined, StarOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { initialBeer } from 'models/Beer';
import BeerDetail from 'models/BeerDetail';
import { CartItem } from 'models/Cart';
import { CartStore } from 'store';

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

  const countPlusClick = () => {
    item.setCount(item.selectedCount + 1);
  };
  const countMinusClick = () => {
    item.setCount(item.selectedCount - 1);
  };

  const addItemToCard = () => {
    const product = CartItem.create({id: item.id, count: item.selectedCount})
    CartStore.addProduct(product);
  }

  const removeItem = () => {
    CartStore.removeItem(item.id);
  }

  return (
    // eslint-disable-next-line react/jsx-key
    <Card title={item.name} actions={[<StarOutlined />]}>
      <div className="details-container">
        <img className="details-beer-img" src={item.image_url} alt={item.name}/>
        <div>
          <Descriptions className="beer-card_description" title="Details" size="middle" column={2}>
            <Descriptions.Item label="Description" span={2}>
              {item.description}
            </Descriptions.Item>
            <Descriptions.Item label="Brewers tips" span={2}>{item.brewers_tips}</Descriptions.Item>
            <Descriptions.Item label="Contributed by" span={1}>{item.contributed_by}</Descriptions.Item>
            <Descriptions.Item label="First brewed">{item.first_brewed}</Descriptions.Item>
            <Descriptions.Item label="Food pairing">
              {item.food_pairing.map((food: string, i) => <span key={food} className="food-span">{food}{item.food_pairing.length === (i + 1) ? '' : ', '}</span>)}
            </Descriptions.Item>
            {/** TODO need add ingredients */}
          </Descriptions>
          <div className="actions-container">
            <Button icon={<PlusOutlined />} onClick={countPlusClick} /><Button icon={<MinusOutlined />} onClick={countMinusClick} />
            <Typography className="actions-container_item">{item.selectedCount}</Typography>
            {!!CartStore.count && CartStore.isExistProduct(item.id) ? (
              <Button className="actions-container_item" icon={<DeleteOutlined />} onClick={removeItem}>Remove from Card</Button>
            ) : (
              <Button className="actions-container_item" icon={<PlusCircleOutlined />} onClick={addItemToCard}>Add to Card</Button>
            )}
            <Link to={routes.cart()}><Button className="actions-container_item" icon={<ShoppingCartOutlined/>} >Go to Cart</Button></Link>
          </div>
        </div>

      </div>

    </Card>
  )
}

export default observer(BeerDetails);