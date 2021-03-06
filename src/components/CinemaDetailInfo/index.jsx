import React from 'react';
import { Card } from 'react-native-elements';
import { Linking } from 'expo';
import * as Animatable from 'react-native-animatable';

import CinemaDetailInfoLink from '../CinemaDetailInfoLink';
import Text from '../Text';
import styles from './styles';
import { cinemaType } from '../../types/index';

const generateMapUrl = (address, city) => (
	`http://maps.google.com/maps?daddr=${address}, ${city}`
);

const CinemaDetailInfo = ({ cinema }) => {
	const descriptionText = cinema.description ? (
		<Text isHTML style={styles.descriptionText}>
			{cinema.description}
		</Text>
	) : null;

	const addressText = cinema['address\t'] ? (
		<CinemaDetailInfoLink
			iconName="map-marker-alt"
			onPressHandler={() => Linking.openURL(generateMapUrl(cinema['address\t'], cinema.city))}
			text={` ${cinema['address\t']}, ${cinema.city}`}
		/>
	) : null;

	const phoneText = cinema.phone ? (
		<CinemaDetailInfoLink
			iconName="phone-square"
			onPressHandler={() => Linking.openURL(`tel:${cinema.phone}`)}
			text={cinema.phone}
		/>
	) : null;

	const websiteText = cinema.website ? (
		<CinemaDetailInfoLink
			iconName="globe-americas"
			onPressHandler={() => Linking.openURL(`https://${cinema.website}`)}
			text={cinema.website}
		/>
	) : null;

	return (
		<Animatable.View
			animation="fadeInDown"
			useNativeDriver
		>
			<Card containerStyle={styles.card}>
				<Text h4 style={styles.boldText}>
					{cinema.name}
				</Text>
				{descriptionText}
				{addressText}
				{phoneText}
				{websiteText}
			</Card>
		</Animatable.View>
	);
};

CinemaDetailInfo.propTypes = {
	cinema: cinemaType
};

export default CinemaDetailInfo;