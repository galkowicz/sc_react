import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/root';
import thunk from "redux-thunk";
import axios from "axios";
import createLogger from "redux-logger"

const logger = createLogger();

const middleware = applyMiddleware(thunk, logger);

const initialState = {
    display: 'LIST',
    searches: [ ]
};

export default createStore(rootReducer,initialState , middleware);