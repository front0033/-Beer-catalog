import * as React from 'react';

import { Menu } from 'antd';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { ABVBeerTypeConfig, ColorBeerTypeConfig } from './config';

const { SubMenu } = Menu;

const BeerMenu: React.FC = () => {
  const handleClick = () => {};
  return (
    <Menu
      onClick={handleClick}
      style={{ height: '100%' }}
      defaultSelectedKeys={['gold']}
      defaultOpenKeys={['sub1', 'colours', 'strength']}
      mode="inline"
    >
      <SubMenu key="colours" icon={<MailOutlined />} title="Beer Colours">
        {Object.keys(ColorBeerTypeConfig).map((key) => (
          <Menu.Item key={key}>{ColorBeerTypeConfig[key].label}</Menu.Item>
        ))}
      </SubMenu>
      <SubMenu key="strength" icon={<SettingOutlined />} title="Strength of Beer">
        {Object.keys(ABVBeerTypeConfig).map((key) => (
          <Menu.Item key={key}>{ABVBeerTypeConfig[key].label}</Menu.Item>
        ))}
      </SubMenu>
    </Menu>
  );
};

export default React.memo(BeerMenu);
