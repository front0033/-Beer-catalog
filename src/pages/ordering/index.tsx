import { Form, Alert, Button, Card, Input, Typography } from 'antd';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import routes from 'routes';
import Order, { initialValues, OrderFields } from 'models/Order';
import { countIdsFromUrl } from 'utils/queryStringHeplers';

import './styles.css';
import { BreaadCrumbsStore } from 'store';

const { Title } = Typography;

const Ordering: React.FC<{}> = () => {
  const { search } = useLocation();
  const { category } = useParams<{ category: string }>();

  const item = React.useRef(Order.create(initialValues)).current;
  const productsLength = countIdsFromUrl(search);

  React.useEffect(() => {
    BreaadCrumbsStore.replaceEnd([
      {
        id: 'cart',
        label: productsLength ? `Selected ${productsLength} products in cart` : 'Empty Cart',
        link: routes.cart(category) + search,
      },
      { id: 'order', label: 'Order', link: routes.order(category) + search },
    ]);
  }, [productsLength, search, category]);

  const handleChange = (fieldName: OrderFields): React.ChangeEventHandler<HTMLInputElement> => (e) => {
    item.setField(fieldName, e.target.value);
  };

  return (
    <Card title="Ordering" className="beer-order">
      {!productsLength && <Alert message="Products not found" type="info" />}
      {productsLength && (
        <>
          <div className="delivery-information">
            <Title level={4}>Delivery info</Title>
            <div className="order-field">
              <Form.Item
                name={OrderFields.city}
                label="City/Town"
                rules={[{ required: true }]}
                help={!!item.propertyValidation(OrderFields.city) && 'Неверный формат'}
              >
                <Input placeholder="Prague" value={item.city || ''} onChange={handleChange(OrderFields.city)} />
              </Form.Item>
            </div>
            <div className="order-field">
              <Form.Item
                name={OrderFields.street}
                label="Street"
                rules={[{ required: true }]}
                help={!!item.propertyValidation(OrderFields.street) && 'Неверный формат'}
              >
                <Input placeholder="Parizhska" value={item.street || ''} onChange={handleChange(OrderFields.street)} />
              </Form.Item>
            </div>
            <div className="order-field">
              <Form.Item
                name={OrderFields.houseNumber}
                label="House number"
                rules={[{ required: true }]}
                help={!!item.propertyValidation(OrderFields.houseNumber) && 'Неверный формат'}
              >
                <Input
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
                label="Name"
                rules={[{ required: true }]}
                help={!!item.propertyValidation(OrderFields.name) && 'Неверный формат'}
              >
                <Input value={item.name || ''} onChange={handleChange(OrderFields.name)} />
              </Form.Item>
            </div>
            <div className="order-field">
              <Form.Item
                name={OrderFields.email}
                label="Email"
                rules={[{ required: true }]}
                help={!!item.propertyValidation(OrderFields.email) && 'Неверный формат email'}
              >
                <Input
                  placeholder="example@gmai.com"
                  value={item.email || ''}
                  onChange={handleChange(OrderFields.email)}
                />
              </Form.Item>
            </div>
            <div className="order-field">
              <Form.Item
                name={OrderFields.phone}
                label="Phone"
                rules={[{ required: true }]}
                help={!!item.propertyValidation(OrderFields.phone) && 'Неверный формат номера телефона'}
              >
                <Input
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
                label="card numder"
                rules={[{ required: true }]}
                help={!!item.propertyValidation(OrderFields.cardNumber) && 'Неверный формат карты'}
              >
                <Input
                  placeholder="example@gmai.com"
                  value={item.city || ''}
                  onChange={handleChange(OrderFields.cardNumber)}
                />
              </Form.Item>
            </div>
          </div>
          <div className="cart_button-container">
            <Link to={routes.order(category)}>
              <Button type="primary">Buy $$$</Button>
            </Link>
          </div>
        </>
      )}
    </Card>
  );
};

export default observer(Ordering);
