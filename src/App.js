import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
import DetailsPage from './components/DetailsPage';
import ShopingCart from './components/ShopingCart';
import Default from './components/Default';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Custom.css';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductsList} />
          <Route path="/details" component={DetailsPage} />
          <Route path="/cart" component={ShopingCart} />
          <Route component={Default} />
        </Switch>
        {/* <Modal /> */}
      </ Fragment>
    );
  }
}

export default App;
