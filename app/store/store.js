import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/root';

import createLogger from "redux-logger"
import thunk from "redux-thunk";
import promiseMiddleware from 'redux-promise-middleware';



const logger = createLogger();

const middleware = applyMiddleware(promiseMiddleware(), thunk, logger);

export default createStore(rootReducer, middleware);