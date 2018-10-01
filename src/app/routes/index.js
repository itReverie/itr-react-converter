import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './not-found';
import {StyledLayout} from './common.style';
import Header from '../components/header';
import Homepage from './homepage';



export default () => (
  <StyledLayout>
    <Header />
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  </StyledLayout>
);
