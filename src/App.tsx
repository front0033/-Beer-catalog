import React from 'react';

import { Layout } from 'antd';
import { Header, Content, Footer } from 'antd/lib/layout/layout';
import BeerDetails from 'pages/detail';
import Ordering from 'pages/ordering';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from 'pages/main';
import routes from 'routes';
import BeerCart from 'pages/cart';

import './App.css';

export default function App() {
  return (
    <Layout>
      <Header className="header">Beans Love Beers</Header>
      <Layout>
        <Content>
          <Router>
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
          </Router>
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>Beer Catalog developed by Igor Bezdeneznhykh</Footer>
    </Layout>
  );
}
