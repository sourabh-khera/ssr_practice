import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools as compose } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import middlewares from '../middlewares';

const configureStore = (initialState = {}) => {
	return createStore(
		rootReducer,
		initialState,
		compose(applyMiddleware(...middlewares)),
	);
};

export default configureStore;
