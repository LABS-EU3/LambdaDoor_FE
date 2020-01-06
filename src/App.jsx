import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import decode from 'jwt-decode';
import store from './state/store';
import AppRouter from './components/Router';
import { setAuthenticated } from './state/actions/auth';

const App = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const { userId, name, email, profilePicture } = decode(token);
      store.dispatch(setAuthenticated(userId, name, email, profilePicture));
    }
  }, []);

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
