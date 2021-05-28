import * as React from 'react';

import { Menu } from 'antd';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import routes from 'routes';
import { ABVBeerTypeConfig, BeerColoursType, BeerStrengthType, ColorBeerTypeConfig } from './config';

const { SubMenu } = Menu;

interface IBeerMenuProps {
  selectedCategory: string;
}

const BeerMenu: React.FC<IBeerMenuProps> = ({ selectedCategory }) => (
  <Menu
    style={{ height: '100%' }}
    defaultSelectedKeys={[selectedCategory]}
    defaultOpenKeys={['sub1', 'colours', 'strength']}
    mode="inline"
  >
    <SubMenu key="colours" icon={<MailOutlined />} title="Beer Colours">
      {Object.keys(ColorBeerTypeConfig).map((key) => (
        <Menu.Item key={key}>
          <Link key={key} to={routes.mainWithCategory(key)}>
            {ColorBeerTypeConfig[key as BeerColoursType].label}
          </Link>
        </Menu.Item>
      ))}
    </SubMenu>
    <SubMenu key="strength" icon={<SettingOutlined />} title="Strength of Beer">
      {Object.keys(ABVBeerTypeConfig).map((key) => (
        <Menu.Item key={key}>
          <Link key={key} to={routes.mainWithCategory(key)}>
            {ABVBeerTypeConfig[key as BeerStrengthType].label}
          </Link>
        </Menu.Item>
      ))}
    </SubMenu>
  </Menu>
);

export default React.memo(BeerMenu);
