import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Text from '../Text';

import styles from './styles';
import { GRAY } from '../../styles/colors'

const EmptyContacts = () => (
	<View style={styles.container}>
		<Icon
			name="sad-tear"
			color={GRAY}
			size={250}
		/>
		<Text style={styles.text}>
			Engar myndir til sýnis hér!
		</Text>
	</View>
);

export default EmptyContacts;