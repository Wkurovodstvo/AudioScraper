import React from 'react';

import { Provider, ReactReduxContext } from 'react-redux';
import { Reset } from 'styled-reset';

import { AppHeader } from '@/components/header/AppHeader';
import { store } from '@/redux/Store';
import { Routing } from '@/router/Routing';

const App = () => {
  return (
    <Provider store={store} context={ReactReduxContext}>
      <Reset />
      <Routing>
        <AppHeader />
      </Routing>
    </Provider>
  );
};

export default App;
