import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';


import App from './App';
import store from './store';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store}/>
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}

store.subscribe(() => {
	render(App);
});