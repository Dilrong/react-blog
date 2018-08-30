import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import penderMiddleware from 'redux-pender';
import * as modules from './modules';

const reducers = combineReducers(modules);
const middlewares = [penderMiddleware()];

//development mode
const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSTION_COMPOSE__;
const composeEnhancers = devtools || compose;

//preloadedState, Serverside render init state
const configure = (preloadedState) => createStore(reducers, preloadedState, composeEnhancers(
    applyMiddleware(...middlewares)
));

export default configure;