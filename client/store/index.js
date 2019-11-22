import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools as compose } from 'redux-devtools-extension';
import userReducer from '../reducers/users.reducer';
import middlewares from '../middlewares';

const configureStore = (initialState = {}) => {
	return createStore(
		userReducer,
		initialState,
		compose(applyMiddleware(...middlewares)),
	);
};

export default configureStore;
