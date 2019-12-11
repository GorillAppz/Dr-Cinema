import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Text from '../Text';
import { ORANGE } from '../../styles/colors';
import styles from './styles';

const ShowtimeList = () => {
	const icon = (
		<Icon
			name="ticket-alt"
			color={ORANGE}
			size={25}
		/>
	);

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				{icon}
				<Text h3 style={styles.title}>Sýningatímar</Text>
				{icon}
			</View>
		</View>
	);
};

export default ShowtimeList;