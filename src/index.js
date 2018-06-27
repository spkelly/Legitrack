import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import Routes from './routes';

import Header from './components/Header/Header';
import './stylesheets/main.scss';

const Index = () => {
  return (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
  );
};


ReactDOM.render(<Index />, document.getElementById('index'));