import React from 'react';
import { Provider } from 'react-redux';
import { store } from './helpers/redux';
import Routes from './navigation';

const App: React.FC = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App;