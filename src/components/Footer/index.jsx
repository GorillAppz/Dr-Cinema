import React from 'react';
import { View } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import styles from './styles';

const Footer = () => (
	<View style={styles.container}>
		<Button
			icon={<Icon type="font-awesome" name="camera-retro" size={15} color="white" />}
			title="Kvikmyndahús"
			buttonStyle={styles.button}
			titleStyle={styles.title}
		/>
		<Button
			icon={<Icon type="font-awesome" name="film" size={15} color="white" />}
			title="Væntanlegt"
			buttonStyle={styles.button}
			titleStyle={styles.title}
		/>
	</View>
);

export default Footer;