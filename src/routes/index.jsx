import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Platform } from 'react-native';

import Main from '../views/Main';
import Cinemas from '../views/Cinemas';
import { BLACK } from '../styles/colors';
import CinemaDetail from '../views/CinemaDetail/index';
import Movie from '../views/Movie';
import UpcomingMovies from '../views/UpcomingMovies/index';
import TabBar from '../components/Footer';

const commonStackOptions = {
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
			fontFamily: 'Roboto',
			...Platform.select({
				ios: { fontFamily: 'Helvetica Neue' },
				android: { fontFamily: 'Roboto' }
			})
		}
	},
	headerLayoutPreset: 'center',
	cardStyle: {
		backgroundColor: BLACK
	}
};


const CinemasStackNavigator = createStackNavigator(
	{
		Cinemas: { screen: Cinemas },
		CinemaDetail: { screen: CinemaDetail },
		Movie: { screen: Movie }
	},
	{
		...commonStackOptions
	}
);

const UpcomingMoviesStackNavigator = createStackNavigator(
	{
		UpcomingMovies: { screen: UpcomingMovies },
		Movie: { screen: Movie }
	},
	{
		...commonStackOptions
	}
);

const MainTabNavigator = createBottomTabNavigator(
	{
		Main: { screen: Main },
		CinemasStackNavigator,
		UpcomingMoviesStackNavigator
	},
	{
		initialRouteName: 'Main',
		tabBarComponent: TabBar
	}
);

export default createAppContainer(MainTabNavigator);