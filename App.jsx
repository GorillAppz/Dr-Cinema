import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppContainer from './src/routes';
import reducers from './src/reducers';

const store = createStore(reducers, applyMiddleware(thunk));

export default function App() {
	return (
		<Provider store={store}>
			<StatusBar barStyle="light-content" />
			<AppContainer />
		</Provider>
	);
}