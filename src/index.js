import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app';
import { Provider } from 'react-redux';
import configureStore from './store';
import CONST from './constants';

const store = configureStore({...CONST});
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();