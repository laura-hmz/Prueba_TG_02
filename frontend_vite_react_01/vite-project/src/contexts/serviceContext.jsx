import { createContext, useState, useEffect,useCallback,useContext } from 'react';
import PropTypes from 'prop-types';
//import {  } from '../api/servicesApi.js';
//import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from './userContext';

export const serviceContext = createContext(null);

export const serviceProvider = ({ children }) => {
    const { userData, isAuthenticated } = useContext(UserContext);
    
    const serviceContextValue = {
    
    };

  return (
    <serviceContext.Provider 
      value={serviceContextValue}>
      {children}
    </serviceContext.Provider>
  );
};

serviceProvider.propTypes = {
  children: PropTypes.node
};


