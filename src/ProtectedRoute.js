import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './context/AuthContext'

const ProtectedRoute = ({ component: Component, ...rest}) => {
    const { authToken } = useAuth()
    return ( 
        <Route {...rest} render={props => {
            return authToken ? <Component {...props} /> : <Redirect to="/signin" />
        }}/>
     )
}

export default ProtectedRoute