// store.js

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import modalReducer from './components/modal/modalReducer';

const rootReducer = combineReducers({
    modal: modalReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
