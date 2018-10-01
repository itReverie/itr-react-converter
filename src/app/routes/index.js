import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import NotFound from './not-found';
import {StyledLayout} from './common.style';
import Header from '../components/header';
import Footer from '../components/footer';
import Homepage from './homepage';

// const Homepage = Loadable({
//   loader: () => import(/* webpackChunkName: "homepage" */ './homepage'),
//   loading: () => null,
//   modules:['Homepage']
// });


export default () => (
  <StyledLayout>
    <Header />
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
    <Footer />
  </StyledLayout>
);
