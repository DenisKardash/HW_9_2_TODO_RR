import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { todosReducer, isLoadingReducer, searchTextReducer } from './reducers';

const reducer = combineReducers({
	todosState: todosReducer,
	isLoadingState: isLoadingReducer,
	searchTextState: searchTextReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
