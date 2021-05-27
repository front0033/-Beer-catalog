import * as React from 'react';

import { Menu, MenuProps } from 'antd';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { IBeerListParams } from 'api/types';
import { ABVBeerTypeConfig, BeerColoursType, BeerStrengthType, ColorBeerTypeConfig } from './config';

const { SubMenu } = Menu;

interface IBeerMenuProps {
  onSelect: (params: IBeerListParams) => void;
}

const BeerMenu: React.FC<IBeerMenuProps> = ({ onSelect }) => {
  const handleClick: MenuProps['onClick'] = (e) => {
    onSelect(
      e.keyPath.includes('strength')
        ? ABVBeerTypeConfig[e.key as BeerStrengthType].params
        : ColorBeerTypeConfig[e.key as BeerColoursType].params
    );
  };
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
          <Menu.Item key={key}>{ColorBeerTypeConfig[key as BeerColoursType].label}</Menu.Item>
        ))}
      </SubMenu>
      <SubMenu key="strength" icon={<SettingOutlined />} title="Strength of Beer">
        {Object.keys(ABVBeerTypeConfig).map((key) => (
          <Menu.Item key={key}>{ABVBeerTypeConfig[key as BeerStrengthType].label}</Menu.Item>
        ))}
      </SubMenu>
    </Menu>
  );
};

export default React.memo(BeerMenu);
