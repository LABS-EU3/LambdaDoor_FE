import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store';
import AppRouter from './components/Router';

const App = () => {
<<<<<<< HEAD:src/App.js
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}
=======
  return <AppRouter />;
};
>>>>>>> develop:src/App.jsx

export default App;
