import React from 'react';

import { Breadcrumb, Layout } from 'antd';

import BeerMenu from 'components/menu';
import BeerDetails from 'pages/detail';
import Ordering from 'pages/ordering';
import MainPage from 'pages/main';

import { Switch, Route, Link } from 'react-router-dom';

import routes from 'routes';
import BeerCart from 'pages/cart';

import './App.css';
import { BeerCollectionStore, BreaadCrumbsStore } from 'store';
import { observer } from 'mobx-react';

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => (
  <Layout>
    <Header className="header">
      <div className="logo" />
      Beans Love Beers
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0', fontSize: 18 }}>
        {BreaadCrumbsStore.items.toJSON().map((item) => (
          <Breadcrumb.Item key={item.id}>
            <Link to={item.link}>{item.label}</Link>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
      <Layout className="site-layout-background">
        <Sider className="site-layout-background" width={200}>
          <BeerMenu onSelect={BeerCollectionStore.loadByParams} />
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Switch>
            <Route exact path={routes.main()}>
              <MainPage />
            </Route>
            <Route path={routes.details()}>
              <BeerDetails />
            </Route>
            <Route path={routes.cart()}>
              <BeerCart />
            </Route>
            <Route path={routes.order()}>
              <Ordering />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Beer Catalog developed by Igor Bezdeneznhykh</Footer>
  </Layout>
);

export default observer(App);
