import * as React from 'react';

import './styles.css';

import { Button, List } from 'antd';
import { BeerCollectionStore } from 'store';

BeerCollectionStore.addBeer({name: 'Bud'});
const MainPage = () => {
  return (
    <div className='container'>
      <Button>Кнопка</Button>
      <List 
        dataSource={BeerCollectionStore.items}
        renderItem={item => (
        <List.Item>{item.name}</List.Item>
      )}
      />
    </div>
  );
};

export default MainPage;