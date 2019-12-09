import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import Main from '../views/Main';
import Cinemas from '../views/Cinemas';
import { BLACK } from '../styles/colors';
import CinemaDetail from '../views/CinemaDetail/index';


const MainNavigator = createStackNavigator(
	{
		Main: { screen: Main },
		Cinemas: { screen: Cinemas },
		CinemaDetail: { screen: CinemaDetail }
	},
	{
		initialRouteName: 'Main',
		/* The header config from HomeScreen is now here */
		defaultNavigationOptions: {
			headerStyle: {
				backgroundColor: BLACK,
				borderBottomWidth: 0
			},
			title: 'Heim',
			headerTintColor: 'white',
			headerTitleStyle: {
				color: 'white',
				fontWeight: 'bold',
				alignSelf: 'center',
				fontFamily: 'Roboto',
				...Platform.select({
					ios: { fontFamily: 'Helvetica Neue' },
					android: { fontFamily: 'Roboto' }
				})
			}
		}
	}
);

export default createAppContainer(MainNavigator);