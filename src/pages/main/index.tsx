import * as React from 'react';

import { observer } from 'mobx-react';
import BeerCard from './Card/Card';
import './styles.css';

import { Col, Row } from 'antd';
import { BeerCollectionStore } from 'store';
import Search from 'antd/lib/input/Search';

const MainPage = () => {
  React.useEffect(() => {
    BeerCollectionStore.loadAll();
  }, [])
  return (
    <div className='main-page_container'>
      <div className="main-page_search_container">
        <Search placeholder="please input text" enterButton="Search" size="large" loading />
      </div>
      <Row>
        {BeerCollectionStore.items.toJSON().map((beer) => (
          <Col key={beer.id} className="main-page_beer-list_col" span={8}>
            <BeerCard data={beer} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default observer(MainPage);