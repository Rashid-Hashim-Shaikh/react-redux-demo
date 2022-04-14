import { createStore,applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

// createstore can only store one reducer

// applying middleware
// 1 - install middleware
// 2 - import applyMiddleware from redux and the middleware
// 3 - createStore(reducer, applyMiddleware(middleware))


const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;
