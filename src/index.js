import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/reset.css';
import 'styles/index.css';
import Home from 'components/Home';
import Level1 from 'components/Level1';
import Level2 from 'components/Level2';
import Level3 from 'components/Level3';
import Level4 from 'components/Level4';
import Level5 from 'components/Level5';
import reducers from './reducers';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(reducers, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/level1">
          <Level1 />
        </Route>
        <Route exact path="/level2">
          <Level2 />
        </Route>
        <Route exact path="/level3">
          <Level3 />
        </Route>
        <Route exact path="/level4">
          <Level4 />
        </Route>
        <Route exact path="/level5">
          <Level5 />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
