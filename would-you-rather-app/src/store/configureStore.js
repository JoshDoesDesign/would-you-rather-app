
// GET EVERYTHING TALKING IN YOUR APP

import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

// PASS createStore OUR MIDDLEWARE (THUNK), rootReducer and devTools args

export default function configureStore() {
    return createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        applyMiddleware(thunk)
    );
}