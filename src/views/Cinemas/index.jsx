import React from 'react';
import { View } from 'react-native';

import CinemaList from '../../components/CinemaList';
import styles from './styles';

const Cinemas = () => {
	return (
		<View style={styles.container}>
			<CinemaList />
		</View>
	);
};

Cinemas.navigationOptions = {
	title: 'Kvikmyndahús'
};

export default Cinemas;