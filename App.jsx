import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppContainer from './src/routes';
import reducers from './src/reducers';
import Footer from './src/components/Footer';

const store = createStore(reducers, applyMiddleware(thunk));

export default function App() {
	return (
		<Provider store={store}>
			<View style={{ flex: 1 }}>
				<AppContainer />
				<Footer />
			</View>
		</Provider>
	);
}