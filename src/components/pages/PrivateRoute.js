import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ ...rest }) => (
    <Route {...rest} render={props => (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
);

export default PrivateRoute;