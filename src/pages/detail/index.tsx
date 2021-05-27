import * as React from 'react';

import { Breadcrumb, Button, Card, Descriptions, Typography } from 'antd';
import {
  DeleteOutlined,
  MinusOutlined,
  PlusCircleOutlined,
  PlusOutlined,
  ShoppingCartOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { Link, useLocation, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import BeerDetail from 'models/BeerDetail';
import { initialBeer } from 'models/Beer';

import './styles.css';
import routes from 'routes';
import {
  addIdToUrl,
  countByIdFromUrl,
  decrementCountFromIdFromUrl,
  isExistIdFromUrl,
  removeIdFromUrl,
} from 'utils/queryStringHeplers';

const BeerDetails: React.FC<{}> = () => {
  const { id } = useParams<{ id: string }>();
  const { search } = useLocation();
  const item = React.useRef(BeerDetail.create({ ...initialBeer })).current;

  React.useEffect(() => {
    if (id) {
      item.loadById(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    // eslint-disable-next-line react/jsx-key
    <Card title={item.name} actions={[<StarOutlined />]}>
      <div className="bread-crumb">
        <Breadcrumb>
          <Breadcrumb.Item key="home">
            <Link to={routes.main() + search}>Catalog</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item key={id}>
            <Link to={routes.details(id)}>{item.name}</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="details-container">
        <img className="details-beer-img" src={item.image_url} alt={item.name} />
        <div>
          <Descriptions className="beer-card_description" title="Details" size="middle" column={2}>
            <Descriptions.Item label="Description" span={2}>
              {item.description}
            </Descriptions.Item>
            <Descriptions.Item label="Brewers tips" span={2}>
              {item.brewers_tips}
            </Descriptions.Item>
            <Descriptions.Item label="Contributed by" span={1}>
              {item.contributed_by}
            </Descriptions.Item>
            <Descriptions.Item label="First brewed">{item.first_brewed}</Descriptions.Item>
            <Descriptions.Item label="Food pairing">
              {item.food_pairing.map((food: string, i) => (
                <span key={food} className="food-span">
                  {food}
                  {item.food_pairing.length === i + 1 ? '' : ', '}
                </span>
              ))}
            </Descriptions.Item>
            {/** TODO need add ingredients */}
          </Descriptions>
          <div className="actions-container">
            <Link to={routes.details(id) + addIdToUrl(search, id)}>
              <Button icon={<PlusOutlined />} />
            </Link>
            <Link to={routes.details(id) + decrementCountFromIdFromUrl(search, id)}>
              <Button icon={<MinusOutlined />} />
            </Link>
            <Typography className="actions-container_item">{countByIdFromUrl(search, id)}</Typography>
            {isExistIdFromUrl(search, id) ? (
              <Link to={routes.details(id) + removeIdFromUrl(search, String(id))}>
                <Button className="actions-container_item" icon={<DeleteOutlined />}>
                  Remove from Card
                </Button>
              </Link>
            ) : (
              <Link to={routes.details(id) + addIdToUrl(search, String(id))}>
                <Button className="actions-container_item" icon={<PlusCircleOutlined />}>
                  Add to Card
                </Button>
              </Link>
            )}
            <Link to={routes.cart() + search}>
              <Button className="actions-container_item" icon={<ShoppingCartOutlined />}>
                Go to Cart
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default observer(BeerDetails);
