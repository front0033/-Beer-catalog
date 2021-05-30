import React from 'react';

import { Breadcrumb, Layout } from 'antd';

import BeerMenu from 'components/menu';
import BeerDetails from 'pages/detail';
import Ordering from 'pages/ordering';
import MainPage from 'pages/main';

import { Switch, Route, Link, useParams, Redirect } from 'react-router-dom';

import routes from 'routes';
import BeerCart from 'pages/cart';

import './App.css';
import { BreaadCrumbsStore } from 'store';
import { observer } from 'mobx-react';

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        Beans Love Beers
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0', fontSize: 18 }}>
          {BreaadCrumbsStore.items.toJSON().map((item) => (
            <Breadcrumb.Item key={item.id}>
              <Link to={item.url}>{item.label}</Link>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
        <Layout className="site-layout-background">
          <Sider className="site-layout-background" width={200}>
            <BeerMenu selectedCategory={category} />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Switch>
              <Route exact path={routes.mainWithCategory()}>
                <MainPage />
              </Route>
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
      {!category && <Redirect to={routes.mainWithCategory('lightBlonde')} />}
    </Layout>
  );
};

export default observer(App);
