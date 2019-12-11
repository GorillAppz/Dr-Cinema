import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import styles from './styles';
import { funcType } from '../../types/index';
import { ORANGE } from '../../styles/colors';

const Footer = ({ navigation: { navigate, state: { index } }, navigationState }) => (
	<View style={styles.container}>
		<Button
			onPress={() => navigate('CinemasStackNavigator')}
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
			onPress={() => navigate('UpcomingMoviesStackNavigator')}
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
);

Footer.propTypes = {
	navigationHandler: funcType
};

export default Footer;