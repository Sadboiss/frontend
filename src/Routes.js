import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/Home';
import StorePage from './components/pages/Store';
import CartPage from './components/pages/Cart';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/Store" exact component={StorePage} />
            <Route path="/cart" exact component={CartPage} />
        </Switch>
    )
}

export default Routes;