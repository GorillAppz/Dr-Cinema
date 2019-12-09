import React from 'react';
import { Card } from 'react-native-elements';

import Text from '../Text';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View } from 'react-native';

const MovieListItem = ({ title, poster, year, genres, empty }) => (
	<View style={styles.container}>
		<TouchableOpacity>
			<Card
				featuredTitle={title}
				featuredTitleStyle={styles.featureTitle}
				featuredSubtitle={year}
				image={{ uri: poster }}
				containerStyle={[styles.card, empty ? styles.empty : null]}
				imageStyle={styles.cardImage}
				imageProps={{ ...styles.cardImagePropStyle }}
			>
				<Text style={styles.text}>
					{genres && genres.map((x, i) => (i !== genres.length - 1 ? x.Name + ', ' : x.Name))}
				</Text>
			</Card>
		</TouchableOpacity>
	</View>
);

export default MovieListItem;