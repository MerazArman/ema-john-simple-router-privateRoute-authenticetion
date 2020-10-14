import React from 'react';
import { useContext } from 'react';
import { Redirect, Route,  } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRout = ({children , ...rest}) => {
    const [loggedUser, setLoggedUer] = useContext(UserContext)

    return (
        <Route
      {...rest}
      render={({ location }) =>
        loggedUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRout;