import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import styles from './styles';
import { funcType } from '../../types/index';

const Footer = ({ navigationHandler }) => (
	<View style={styles.container}>
		<Button
			onPress={() => navigationHandler('Cinemas')}
			icon={<Icon type="font-awesome" name="camera-retro" size={15} color="white" />}
			title="Kvikmyndahús"
			buttonStyle={styles.button}
			titleStyle={styles.title}
		/>
		<Button
			onPress={() => navigationHandler('UpcomingMovies')}
			icon={<Icon type="font-awesome" name="film" size={15} color="white" />}
			title="Væntanlegt"
			buttonStyle={styles.button}
			titleStyle={styles.title}
		/>
	</View>
);

Footer.propTypes = {
	navigationHandler: funcType
};

export default Footer;