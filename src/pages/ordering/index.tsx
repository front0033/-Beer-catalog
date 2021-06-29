import { Form, Alert, Button, Card, Input, Typography } from 'antd';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import routes from 'routes';
import Order, { initialValues, OrderFields } from 'models/Order';
import { countIdsFromUrl } from 'utils/queryStringHeplers';

import './styles.css';
import { BreaadCrumbsStore } from 'store';
import { getLabelBySubUrl } from 'components/menu/config';

const { Title } = Typography;

const Ordering: React.FC<{}> = () => {
  const { search } = useLocation();
  const { category } = useParams<{ category: string }>();

  const item = React.useRef(Order.create(initialValues)).current;
  const productsLength = countIdsFromUrl(search);

  React.useEffect(() => {
    BreaadCrumbsStore.set([
      { id: category, label: `Catalog ${getLabelBySubUrl(category)}`, url: routes.mainWithCategory(category) },
      {
        id: 'cart',
        label: productsLength ? `Selected ${productsLength} products in cart` : 'Empty Cart',
        url: routes.cart(category) + search,
      },
      { id: 'order', label: 'Order', url: routes.order(category) + search },
    ]);
  }, [productsLength, search, category]);

  const handleChange = (fieldName: OrderFields): React.ChangeEventHandler<HTMLInputElement> => (e) => {
    const { value } = e.target;
    item.setField(fieldName, fieldName === OrderFields.houseNumber ? +value : value);
  };

  const handleBlure = (fieldName: OrderFields) => () => {
    item.validateField(fieldName);
  };

  const handleSubmit = () => {
    if (!item.validate()) {
      return;
    }

    // eslint-disable-next-line no-alert
    alert(JSON.stringify(item));
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
                help={item.errors[OrderFields.city]}
                validateStatus={item.errors[OrderFields.city] ? 'error' : ''}
              >
                <Input
                  placeholder="Prague"
                  value={item.city || ''}
                  onChange={handleChange(OrderFields.city)}
                  onBlur={handleBlure(OrderFields.city)}
                />
              </Form.Item>
            </div>
            <div className="order-field">
              <Form.Item
                name={OrderFields.street}
                label="Street"
                help={item.errors[OrderFields.street]}
                validateStatus={item.errors[OrderFields.street] ? 'error' : ''}
              >
                <Input
                  placeholder="Parizhska"
                  value={item.street || ''}
                  onChange={handleChange(OrderFields.street)}
                  onBlur={handleBlure(OrderFields.street)}
                />
              </Form.Item>
            </div>
            <div className="order-field">
              <Form.Item
                name={OrderFields.houseNumber}
                label="House number"
                help={item.errors[OrderFields.houseNumber]}
                validateStatus={item.errors[OrderFields.houseNumber] ? 'error' : ''}
              >
                <Input
                  placeholder="1"
                  value={item.houseNumber || ''}
                  onChange={handleChange(OrderFields.houseNumber)}
                  onBlur={handleBlure(OrderFields.houseNumber)}
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
                validateTrigger="onBlur"
                help={item.errors[OrderFields.name]}
                validateStatus={item.errors[OrderFields.name] ? 'error' : ''}
              >
                <Input
                  value={item.name || ''}
                  onChange={handleChange(OrderFields.name)}
                  onBlur={handleBlure(OrderFields.name)}
                />
              </Form.Item>
            </div>
            <div className="order-field">
              <Form.Item
                name={OrderFields.email}
                label="Email"
                help={item.errors[OrderFields.email]}
                validateStatus={item.errors[OrderFields.email] ? 'error' : ''}
              >
                <Input
                  placeholder="example@gmai.com"
                  value={item.email || ''}
                  onChange={handleChange(OrderFields.email)}
                  onBlur={handleBlure(OrderFields.email)}
                />
              </Form.Item>
            </div>
            <div className="order-field">
              <Form.Item
                name={OrderFields.phone}
                label="Phone"
                help={item.errors[OrderFields.phone]}
                validateStatus={item.errors[OrderFields.phone] ? 'error' : ''}
              >
                <Input
                  placeholder="+7-999-000-00-00"
                  value={item.phone || ''}
                  onChange={handleChange(OrderFields.phone)}
                  onBlur={handleBlure(OrderFields.city)}
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
                help={item.errors[OrderFields.cardNumber]}
                validateStatus={item.errors[OrderFields.cardNumber] ? 'error' : ''}
              >
                <Input
                  placeholder="example@gmai.com"
                  value={item.city || ''}
                  onChange={handleChange(OrderFields.cardNumber)}
                  onBlur={handleBlure(OrderFields.cardNumber)}
                />
              </Form.Item>
            </div>
          </div>
          <div className="cart_button-container">
            <Link to={routes.order(category)}>
              <Button onClick={handleSubmit} type="primary">
                Buy $$$
              </Button>
            </Link>
          </div>
        </>
      )}
    </Card>
  );
};

export default observer(Ordering);
