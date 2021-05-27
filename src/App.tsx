import React from 'react';

import { Layout } from 'antd';

import BeerMenu from 'components/menu';
import BeerDetails from 'pages/detail';
import Ordering from 'pages/ordering';
import MainPage from 'pages/main';

import { Switch, Route } from 'react-router-dom';

import routes from 'routes';
import BeerCart from 'pages/cart';

import './App.css';
import { BeerCollectionStore } from 'store';

const { Header, Content, Footer, Sider } = Layout;

export default function App() {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        Beans Love Beers
      </Header>
      <Content>
        {/** breabCrumbs */}
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
}
