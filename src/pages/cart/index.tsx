import { Alert, Breadcrumb, Button, Card, Descriptions } from 'antd';
import useLoadPruductByQueryUrl from 'hooks/loadPruductByQueryUrl';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import routes from 'routes';
import { CartStore } from 'store';

import './styles.css';

const BeerCart: React.FC<{}> = () => {
  const { search } = useLocation();

  useLoadPruductByQueryUrl(search);

  return (
    <Card title="Cart" className="beer-cart">
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
        <React.Fragment key={item.id}>
          <div className="card_item-container">
            <img className="cart-beer-img" src={item.image_url} alt={item.name} />
            <Descriptions className="cart_item_description" title={`${i + 1}. ${item.name}`} size="middle" column={2}>
              <Descriptions.Item label="Description" span={2}>
                {item.description}
              </Descriptions.Item>
              <Descriptions.Item label="count">{item.selectedCount}</Descriptions.Item>
              <Descriptions.Item label="price">3.50 $</Descriptions.Item>
            </Descriptions>
          </div>
        </React.Fragment>
      ))}
      {CartStore.items.toJSON().length && (
        <div className="cart_button-container">
          <Link to={routes.order() + CartStore.paramsToCart}>
            <Button type="primary">Go to ordering</Button>
          </Link>
        </div>
      )}
    </Card>
  );
};

export default observer(BeerCart);
