import React from 'react';
import {Redirect} from 'react-router-dom';

// src/hocs/withAuth.js

export default function withAuth(Component) {
  function WrapperComponent(props) {
    const token = localStorage.getItem('token');

    if(token === null) {
      return <Redirect to="/signin" />;
    }
    return <Component {...props} token={token} />;
  }  

  WrapperComponent.dispalyName = `withAuth(${Component.name})`;

  return WrapperComponent;
  
}