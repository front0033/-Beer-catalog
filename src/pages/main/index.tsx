import * as React from 'react';

import Search from 'antd/lib/input/Search';
import { Button, Card, Col, Row, Skeleton } from 'antd';
import { observer } from 'mobx-react';
import { BeerCollectionStore, BreaadCrumbsStore } from 'store';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link, useLocation, useParams } from 'react-router-dom';
import routes from 'routes';
import { countIdsFromUrl } from 'utils/queryStringHeplers';

import {
  ABVBeerTypeConfig,
  BeerStrengthType,
  ColorBeerTypeConfig,
  BeerColoursType,
  getLabelBySubUrl,
} from 'components/menu/config';
import BeerCard from './Card/Card';
import './styles.css';

const MainPage = () => {
  const { search } = useLocation();
  const { category } = useParams<{ category: string }>();

  React.useEffect(() => {
    if (category) {
      BreaadCrumbsStore.set([
        { id: category, label: `Catalog ${getLabelBySubUrl(category)}`, url: routes.mainWithCategory(category) },
      ]);
      BeerCollectionStore.loadByParams(
        category.includes('strength')
          ? ABVBeerTypeConfig[category as BeerStrengthType].params
          : ColorBeerTypeConfig[category as BeerColoursType].params
      );
    }
  }, [category]);

  const handleSearch = (value: string) => {
    BeerCollectionStore.loadByParams({ beer_name: value });
  };

  return (
    <div className="main-page_container">
      <div className="main-page_header">
        <div className="main-page_search_container">
          <Search placeholder="please input text" enterButton="Search" size="large" onSearch={handleSearch} />
        </div>
        {!!countIdsFromUrl(search) && (
          <Link to={routes.cart(category) + search}>
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
                <Skeleton className="catalog-item-sceleton" loading avatar active />
              </Card>
            </Col>
          ))}
        {BeerCollectionStore.dataLoadSuccess &&
          BeerCollectionStore.items.toJSON().map((beer) => (
            <Col key={beer.id} className="main-page_beer-list_col" span={8}>
              <BeerCard category={category} data={beer} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default observer(MainPage);
