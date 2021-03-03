import { Alert, Breadcrumb, Card, Descriptions } from 'antd';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import routes from 'routes';
import { CartStore } from 'store';

import './styles.css';

const BeerCart: React.FC<{}> = () => {
  const { search } = useLocation();

  React.useEffect(() => {
    const queryArray = search && search.split('?')[1].split('&') || [];

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
      <div className="bread-crumb">
        <Breadcrumb>
          <Breadcrumb.Item key="home">
            <Link to={routes.main()}>Catalog</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item key="cart">
            <Link to={routes.cart()}>Cart</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {!CartStore.items.toJSON().length && <Alert message="Empty Cart" type="info" />}
      {CartStore.items.map((item, i) => (
        <div key={item.id} className="card_item-container">
          <img className="cart-beer-img" src={item.image_url} alt={item.name}/>
          <Descriptions className="cart_item_description" title={`${i + 1}. ${item.name}`} size="middle" column={2}>
            <Descriptions.Item label="Description" span={2}>
              {item.description}
            </Descriptions.Item>
            <Descriptions.Item label="count">
              {item.selectedCount}
            </Descriptions.Item>
          </Descriptions>
        </div>
      ))}
    </Card>
  )
}

export default observer(BeerCart);