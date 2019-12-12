import React from 'react';
import { Linking } from 'expo';
import { TouchableOpacity } from 'react-native';

import styles from './styles';
import Text from '../Text';
import { stringType } from '../../types/index';

const parseTime = (time) => {
	const timeAndHall = time.split(' ');
	const hall = `salur ${timeAndHall[1].replace(/\(|\)/g, '')}`;
	const parsedTime = timeAndHall[0].replace('.', ':');
	return [parsedTime, hall];
};

const ShowtimeListItem = ({ time, url }) => {
	const [parsedTime, hall] = parseTime(time);

	const onPressHandler = () => {
		Linking.openURL(url);
	};

	return (
		<TouchableOpacity style={styles.pill} onPress={onPressHandler}>
			<Text style={styles.text}>
				{`${parsedTime} (${hall})`}
			</Text>
		</TouchableOpacity>
	);
};

ShowtimeListItem.propTypes = {
	time: stringType,
	url: stringType
};

export default ShowtimeListItem;