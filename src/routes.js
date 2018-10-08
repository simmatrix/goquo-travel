import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/Home/Home';
import HotelDetailPage from './components/HotelDetail/HotelDetail';
import NotFoundPage from './components/NotFound/NotFound';

const routes = (
  <BrowserRouter basename="/goquo-travel">
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/hotel/:id" component={HotelDetailPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default routes;
