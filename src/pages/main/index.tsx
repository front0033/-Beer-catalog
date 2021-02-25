import * as React from 'react';

import { observer } from 'mobx-react';
import BeerCard from './Card';
import './styles.css';

import { Col, Row } from 'antd';
import { BeerCollectionStore } from 'store';
import Search from 'antd/lib/input/Search';

const MainPage = () => {
  React.useEffect(() => {
    BeerCollectionStore.loadAll();
  }, [])
  return (
    <div className='container'>
      <Search placeholder="please input text" enterButton="Search" size="large" loading />
      <Row>
      {BeerCollectionStore.items.toJSON().map((beer) => (
        <Col className="beer-list__col" span={6}>
          <BeerCard data={beer} />
        </Col>
      ))}
      </Row>
    </div>
  );
};

export default observer(MainPage);