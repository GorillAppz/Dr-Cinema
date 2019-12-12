import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';

import styles from './styles';
import { ORANGE } from '../../styles/colors';

const Footer = () => {
	const { navigate, state: { index } } = useNavigation();
	const tokenIsLoading = useSelector((state) => state.token.isLoading);


	const navigateToCinemas = () => {
		navigate(index === 1 ? 'Cinemas' : 'CinemasStackNavigator');
	};

	const navigateToUpcoming = () => {
		navigate(index === 2 ? 'UpcomingMovies' : 'UpcomingMoviesStackNavigator');
	};

	return (
		<View style={styles.container}>
			{!tokenIsLoading ? (
				<View style={styles.body}>
					<Button
						onPress={() => navigateToCinemas()}
						icon={(
							<Icon
								type="font-awesome"
								name="camera-retro"
								size={15}
								color={index === 1 ? ORANGE : 'white'}
							/>
						)}
						title="Kvikmyndahús"
						buttonStyle={styles.button}
						titleStyle={{ ...styles.title, color: (index === 1 ? ORANGE : 'white') }}
					/>
					<Button
						onPress={navigateToUpcoming}
						icon={(
							<Icon
								type="font-awesome"
								name="film"
								size={15}
								color={index === 2 ? ORANGE : 'white'}
							/>
						)}
						title="Væntanlegt"
						buttonStyle={styles.button}
						titleStyle={{ ...styles.title, color: (index === 2 ? ORANGE : 'white') }}
					/>
				</View>
			) : <ActivityIndicator style={styles.activityIndicator} size="large" />}
		</View>
	);
};

export default Footer;