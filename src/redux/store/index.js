import { createStore,applyMiddleware, combineReducers, compose } from 'redux';

import thunk from 'redux-thunk';

import { productReducer } from '../reducers';
import { suggestionReducer } from '../reducers';
import { userReducer } from '../reducers';
import { errorReducer } from '../reducers';


const reducers = combineReducers({
    products: productReducer,
    suggestions: suggestionReducer,
    user: userReducer,
    error: errorReducer
});

const initialState = {};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware)));

export default store;