import { Alert, Breadcrumb, Card, Input, Typography } from 'antd';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import routes from 'routes';
import { CartStore } from 'store';

import './styles.css';

const { Title } = Typography;

const Ordering: React.FC<{}> = () => (
    <Card title="Ordering" className="beer-order">
      <div className="bread-crumb">
        <Breadcrumb>
          <Breadcrumb.Item key="home">
            <Link to={routes.main()}>Catalog</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item key="cart">
            <Link to={routes.order()}>Ordering</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {!CartStore.items.toJSON().length && <Alert message="Products not found" type="info" />}
      {CartStore.items.toJSON().length && (
        <div className="delivery-information">
          <Title level={4}>Delivery info</Title>
          <div className="order-field">
            <Input addonBefore="City/Town" placeholder="Prague" />
          </div>
          <div className="order-field">
            <Input addonBefore="Street" placeholder="Parizhska" />
          </div>
          <div className="order-field">
            <Input addonBefore="House number" placeholder="1" />
          </div>
          <div className="order-field">
            <Input addonBefore="item" placeholder="1" />
          </div>
        </div>
      )}
    </Card>
  )

export default observer(Ordering);