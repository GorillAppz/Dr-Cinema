import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Text from '../Text';
import { ORANGE } from '../../styles/colors';
import styles from './styles';
import ShowtimeListItem from '../ShowtimeListItem';

const ShowtimeList = ({ showtimes }) => {
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
				<Text h4 style={styles.title}>Sýningatímar</Text>
				{icon}
			</View>
			<Text h6>
				Smeltu til þess að kaupa miða
			</Text>
			<View style={styles.showtimesContainer}>
				{
					showtimes.map((st) => (
						<ShowtimeListItem
							key={st.time}
							time={st.time}
							url={st.purchase_url}
						/>
					))
				}
			</View>
		</View>
	);
};

export default ShowtimeList;