import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ORANGE } from '../../styles/colors';

import styles from './styles';

const CinemaDetailInfoLink = ({ iconName, text, onPressHandler, }) => (
	<TouchableOpacity style={styles.iconAndTextContainer} onPress={onPressHandler}>
		<Icon name={iconName} size={20} color={ORANGE} style={styles.icon} />
		<Text style={styles.text}>
			{text}
		</Text>
	</TouchableOpacity>
);

export default CinemaDetailInfoLink;