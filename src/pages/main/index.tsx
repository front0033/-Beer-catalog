import * as React from 'react';

import Search from 'antd/lib/input/Search';
import { Button, Card, Col, Row, Skeleton } from 'antd';
import { observer } from 'mobx-react';
import { BeerCollectionStore } from 'store';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import routes from 'routes';
import { countIdsFromUrl } from 'utils/queryStringHeplers';

import BeerCard from './Card/Card';
import './styles.css';

const MainPage = () => {
  const { search } = useLocation();

  React.useEffect(() => {
    BeerCollectionStore.loadByParams();
  }, []);

  return (
    <div className="main-page_container">
      <div className="main-page_header">
        <div className="main-page_search_container">
          <Search placeholder="please input text" enterButton="Search" size="large" />
        </div>
        {!!countIdsFromUrl(search) && (
          <Link to={routes.cart() + search}>
            <Button className="actions-container_item" icon={<ShoppingCartOutlined />}>
              In Cart {countIdsFromUrl(search)} items
            </Button>
          </Link>
        )}
      </div>
      <Row>
        {BeerCollectionStore.dataPending &&
          new Array(12).fill({}).map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Col key={i} className="main-page_beer-list_col" span={8}>
              <Card>
                <Skeleton loading avatar active />
              </Card>
            </Col>
          ))}
        {BeerCollectionStore.dataLoadSuccess &&
          BeerCollectionStore.items.toJSON().map((beer) => (
            <Col key={beer.id} className="main-page_beer-list_col" span={8}>
              <BeerCard data={beer} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default observer(MainPage);
