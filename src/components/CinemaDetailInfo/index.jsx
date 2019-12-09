import React from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-elements';

import Text from '../Text';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Linking } from 'expo';

const CinemaDetailInfo = ({ cinema }) => {
	console.log("description:", cinema.description);
	return (
		<Card containerStyle={styles.card}>
			<Text h4 style={styles.boldText}>
				{cinema.name}
			</Text>
			{
				cinema.description ? (
					<Text isHTML style={styles.descriptionText}>
						{cinema.description}
					</Text>
				) : null
			}
			{
				cinema.address ? (
					<Text>
						{`${cinema['address\t']}, ${cinema.city}`}
					</Text>
				) : null
			}
			{
				cinema.phone ? (
					<TouchableOpacity onPress={() => Linking.openURL(`tel:${cinema.phone}`)}>
						<Text>
							<Text style={styles.boldText}>
								{'Sími: '}
							</Text>
							<Text style={styles.linkText}>
								{cinema.phone}
							</Text>
						</Text>
					</TouchableOpacity>
				) : null
			}
			{
				cinema.website ? (
					<TouchableOpacity onPress={() => Linking.openURL(`https://${cinema.website}`)}>
						<Text>
							<Text style={styles.boldText}>
								{'Vefsíða: '}
							</Text>
							<Text style={styles.linkText}>
								{cinema.website}
							</Text>
						</Text>
					</TouchableOpacity>
				) : null
			}
		</Card>
	);
};

export default CinemaDetailInfo;