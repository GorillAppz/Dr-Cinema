import React from 'react';
import { View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppContainer from './src/routes';
import reducers from './src/reducers';

const store = createStore(reducers, applyMiddleware(thunk));

export default function App() {
	return (
		<Provider store={store}>
			<AppContainer />
		</Provider>
	);
}