/* eslint-disable react/jsx-key */
import * as React from 'react';

import { Button, Card } from 'antd';
import { PlusCircleOutlined, ShoppingCartOutlined, StarOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import routes from 'routes';

import './styles.css';
import { observer } from 'mobx-react';
import { IBeer } from 'models/Beer';
import { addIdToUrl } from 'utils/queryStringHeplers';

interface IBeerCardProps {
  data: IBeer;
}

const { Meta } = Card;

const BeerCard: React.FC<IBeerCardProps> = ({ data }) => {
  const { search } = useLocation();

  return (
    <Card
      title={data.name}
      actions={[
        <Button icon={<StarOutlined />} />,

        <Link to={routes.details(String(data.id)) + search}>
          <Button>Details...</Button>
        </Link>,
        <Link to={routes.main() + addIdToUrl(search, String(data.id))}>
          <Button
            className="beer_add-to-cart"
            icon={
              <>
                <PlusCircleOutlined /> 1 in
                <ShoppingCartOutlined />
              </>
            }
          />
        </Link>,
        <Link to={routes.cart() + search}>
          <Button className="actions-container_item" icon={<ShoppingCartOutlined />} />
        </Link>,
      ]}
    >
      <Meta
        avatar={<img className="beer-img" src={data.image_url || ''} alt={data.name} />}
        title={data.name}
        description={data.description}
      />
    </Card>
  );
};

export default observer(BeerCard);
