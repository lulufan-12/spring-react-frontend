import React from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import store from './common/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router />
      </div>
    </Provider>
  );
}

export default App;
