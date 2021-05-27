import { Alert, Breadcrumb, Button, Card, Descriptions, Skeleton, Typography } from 'antd';
import useLoadPruductByQueryUrl from 'hooks/loadPruductByQueryUrl';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import routes from 'routes';
import { CartStore } from 'store';
import { countByIdFromUrl, getTotalCount, removeIdFromUrl, countIdsFromUrl } from 'utils/queryStringHeplers';

import './styles.css';

const { Title } = Typography;

const DEFAULT_PRICE = 3.5;

const BeerCart: React.FC<{}> = () => {
  const { search } = useLocation();

  useLoadPruductByQueryUrl(search);

  const totalCount = getTotalCount(search);

  const productsLength = countIdsFromUrl(search);

  return (
    <Card title="Cart" className="beer-cart">
      <div className="bread-crumb">
        <Breadcrumb>
          <Breadcrumb.Item key="home">
            <Link to={routes.main() + search}>Catalog</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item key="cart">
            <Link to={routes.cart() + search}>Cart</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      {CartStore.dataPending && (
        <>
          <Skeleton loading active />
          <Skeleton loading active />
          <Skeleton loading active />
        </>
      )}
      {CartStore.dataLoadSuccess && !productsLength && <Alert message="Empty Cart" type="info" />}
      {CartStore.dataLoadSuccess && !!productsLength && (
        <>
          {CartStore.items.map((item, i) => (
            <React.Fragment key={item.id}>
              <div className="card_item-container">
                <img className="cart-beer-img" src={item.image_url || ''} alt={item.name} />
                <div>
                  <Descriptions
                    className="cart_item_description"
                    title={`${i + 1}. ${item.name}`}
                    size="middle"
                    column={2}
                  >
                    <Descriptions.Item label="Description" span={2}>
                      {item.description}
                    </Descriptions.Item>
                    <Descriptions.Item label="count">{countByIdFromUrl(search, String(item.id))}</Descriptions.Item>
                    <Descriptions.Item label="price">
                      {DEFAULT_PRICE * countByIdFromUrl(search, String(item.id))} $
                    </Descriptions.Item>
                  </Descriptions>
                  <div className="cart_item_actions">
                    <Link to={routes.details(item.id.toString()) + search}>
                      <Button className="cart_item_first_btn">Details</Button>
                    </Link>
                    <Link to={routes.cart() + removeIdFromUrl(search, String(item.id))}>
                      <Button>Remove</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
          <Title level={4}>TOTAL: {totalCount * DEFAULT_PRICE} $</Title>
          {CartStore.items.toJSON().length && (
            <div className="cart_button-container">
              <Link to={routes.order() + search}>
                <Button type="primary">Go to ordering</Button>
              </Link>
            </div>
          )}
        </>
      )}
    </Card>
  );
};

export default observer(BeerCart);
