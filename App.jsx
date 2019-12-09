import React from 'react';
import { View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppContainer from './src/routes';
import reducers from './src/reducers';
import Footer from './src/components/Footer';

const store = createStore(reducers, applyMiddleware(thunk));
const navigation = React.createRef();

export default function App() {
	const handleNavigationChange = (screen) => {
		navigation.current.dispatch(NavigationActions.navigate({
			routeName: screen
		}));
	};
	return (
		<Provider store={store}>
			<View style={{ flex: 1 }}>
				<AppContainer
					onNavigationStateChange={handleNavigationChange}
					ref={navigation}
				/>
				<Footer navigationHandler={handleNavigationChange} />
			</View>
		</Provider>
	);
}