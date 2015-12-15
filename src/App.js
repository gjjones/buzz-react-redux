import React, { Component } from 'react';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import {  Provider } from 'react-redux';
import * as reducers from 'reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import Main from './Main';

// Redux DevTools store enhancers
import { devTools, persistState } from 'redux-devtools';

import { Router, Route, history } from 'react-router';

const logger = createLogger({collapsed: true});
const reducersApp = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(
	logger,
	thunkMiddleware
);
const finalCreateStore = compose(createStoreWithMiddleware, devTools())(createStore);
const store = finalCreateStore(reducersApp);

export default class App extends Component {
  render() {
    return (
    	<div>
	        <Provider store={ store }>
	          <Router history={ history }>
	            <Route path="/" component={ Main }>
	            </Route>
	          </Router>
	        </Provider>
	        <DebugPanel top right bottom>
		        <DevTools store={store} monitor={LogMonitor} />
	        </DebugPanel>
        </div>
    );
  }
}
