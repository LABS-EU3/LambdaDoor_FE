import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store';
import AppRouter from './components/Router';

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
