import React from 'react';

import { Router } from 'react-router-dom';

import { history } from '@/redux/Store';

export const Routing: React.FC = ({ children }) => {
  return <Router history={history}>{children}</Router>;
};
