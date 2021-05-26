import { Form, Alert, Breadcrumb, Button, Card, Input, Typography } from 'antd';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import routes from 'routes';
import { CartStore } from 'store';
import Order, { initialValues, OrderFields } from 'models/Order';

import './styles.css';
import useLoadPruductByQueryUrl from 'hooks/loadPruductByQueryUrl';

const { Title } = Typography;

const Ordering: React.FC<{}> = () => {
  const { search } = useLocation();

  useLoadPruductByQueryUrl(search);

  const item = React.useRef(Order.create(initialValues)).current;

  const handleChange = (fieldName: OrderFields): React.ChangeEventHandler<HTMLInputElement> => (e) => {
    item.setField(fieldName, e.target.value);
  };

  return (
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
              <Form.Item
                name={OrderFields.city}
                label="Note"
                rules={[{ required: true }]}
                help={!!item.propertyValidation(OrderFields.city) && 'Неверный формат'}
              >
                <Input
                  addonBefore="City/Town"
                  placeholder="Prague"
                  value={item.city || ''}
                  onChange={handleChange(OrderFields.city)}
                />
              </Form.Item>
            </div>
            <div className="order-field">
              <Form.Item
                name={OrderFields.street}
                label="Note"
                rules={[{ required: true }]}
                help={!!item.propertyValidation(OrderFields.street) && 'Неверный формат'}
              >
                <Input
                  addonBefore="Street"
                  placeholder="Parizhska"
                  value={item.street || ''}
                  onChange={handleChange(OrderFields.street)}
                />
              </Form.Item>
            </div>
            <div className="order-field">
              <Form.Item
                name={OrderFields.houseNumber}
                label="Note"
                rules={[{ required: true }]}
                help={!!item.propertyValidation(OrderFields.houseNumber) && 'Неверный формат'}
              >
                <Input
                  addonBefore="House number"
                  placeholder="1"
                  value={item.houseNumber || ''}
                  onChange={handleChange(OrderFields.houseNumber)}
                />
              </Form.Item>
            </div>
          </div>
          <div className="contact-information">
            <Title level={4}>Contact info</Title>
            <div className="order-field">
              <Form.Item
                name={OrderFields.name}
                label="Note"
                rules={[{ required: true }]}
                help={!!item.propertyValidation(OrderFields.name) && 'Неверный формат'}
              >
                <Input addonBefore="Name" value={item.name || ''} onChange={handleChange(OrderFields.name)} />
              </Form.Item>
            </div>
            <div className="order-field">
              <Form.Item
                name={OrderFields.email}
                label="Note"
                rules={[{ required: true }]}
                help={!!item.propertyValidation(OrderFields.email) && 'Неверный формат email'}
              >
                <Input
                  addonBefore="Email"
                  placeholder="example@gmai.com"
                  value={item.email || ''}
                  onChange={handleChange(OrderFields.email)}
                />
              </Form.Item>
            </div>
            <div className="order-field">
              <Form.Item
                name={OrderFields.phone}
                label="Note"
                rules={[{ required: true }]}
                help={!!item.propertyValidation(OrderFields.phone) && 'Неверный формат номера телефона'}
              >
                <Input
                  addonBefore="Phone"
                  placeholder="+7-999-000-00-00"
                  value={item.phone || ''}
                  onChange={handleChange(OrderFields.phone)}
                />
              </Form.Item>
            </div>
          </div>
          <div className="contact-information">
            <Title level={4}>Payment info</Title>
            <div className="order-field">
              <Form.Item
                name={OrderFields.cardNumber}
                label="Note"
                rules={[{ required: true }]}
                help={!!item.propertyValidation(OrderFields.cardNumber) && 'Неверный формат карты'}
              >
                <Input
                  addonBefore="card numder"
                  placeholder="example@gmai.com"
                  value={item.city || ''}
                  onChange={handleChange(OrderFields.cardNumber)}
                />
              </Form.Item>
            </div>
          </div>
          <div className="cart_button-container">
            <Link to={routes.order()}>
              <Button type="primary">Buy $$$</Button>
            </Link>
          </div>
        </>
      )}
    </Card>
  );
};

export default observer(Ordering);
