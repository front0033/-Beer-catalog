import { Alert, Breadcrumb, Button, Card, Input, Typography } from 'antd';
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
        <>
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
          <div className="contact-information">
            <Title level={4}>Contact info</Title>
            <div className="order-field">
              <Input addonBefore="Name"/>
            </div>
            <div className="order-field">
              <Input addonBefore="Email" placeholder="example@gmai.com" />
            </div>
            <div className="order-field">
              <Input addonBefore="Phone" placeholder="+7-999-000-00-00" />
            </div>
          </div>
          <div className="contact-information">
            <Title level={4}>Payment info</Title>
            <div className="order-field">
              <Input addonBefore="card numder" placeholder="example@gmai.com" />
            </div>
          </div>
          <div className="cart_button-container">
            <Link to={routes.order()}><Button type="primary">Buy $$$</Button></Link>
          </div>
        </>
      )}
    </Card>
  )

export default observer(Ordering);