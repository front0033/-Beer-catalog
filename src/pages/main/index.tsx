import * as React from 'react';
import { observer } from 'mobx-react';

import './styles.css';

import { Button, List } from 'antd';
import { BeerCollectionStore } from 'store';

const MainPage = () => {
  React.useEffect(() => {
    BeerCollectionStore.loadAll();
  }, [])
  return (
    <div className='container'>
      <Button>Кнопка</Button>
      {BeerCollectionStore.items.toJSON().length && (
        <List
          dataSource={BeerCollectionStore.items}
          renderItem={item => (
            <List.Item>{item.name}</List.Item>
          )}
        />
      )}

    </div>
  );
};

export default observer(MainPage);