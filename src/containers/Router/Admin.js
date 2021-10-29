import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

    const PrivateRoute = ({ component: Component, ...rest }) => {
      const userLoggedIn = sessionStorage.getItem('admin');
      return (
        <Route
          {...rest}
          render={(props) => (
            userLoggedIn
              ? <Component {...props} />
              : (
                <Redirect to={{
                  pathname: '/',
                }}
                />
              )
          )}
        />
      );
    };

    PrivateRoute.propTypes = {
      component: PropTypes.elementType.isRequired,
    };


    export default PrivateRoute;
