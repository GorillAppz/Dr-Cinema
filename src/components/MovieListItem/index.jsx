import React from 'react';
import { Card, Button } from 'react-native-elements';

import Text from '../Text';

import styles from './styles';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';

const MovieListItem = ({ title, poster, releaseDate, genres, onPressHandler, showTrailerButton, hasTrailer, trailerKey }) => (
	<View style={styles.container}>
		<TouchableOpacity style={styles.touchContainer} onPress={onPressHandler}>
			<Card
				featuredTitle={title}
				featuredTitleStyle={styles.featureTitle}
				featuredSubtitle={releaseDate}
				image={{ uri: poster }}
				containerStyle={styles.card}
				imageStyle={styles.cardImage}
				imageProps={{ ...styles.cardImagePropStyle }}
				imageWrapperStyle={styles.cardImageWrapper}
				wrapperStyle={styles.cardWrapper}
			>
				<View style={{ flex: 1, alignContent: 'stretch' }}>

					<Text style={styles.text}>
						{genres && genres.map((x, i) => {
							if (x.Name !== undefined) {
								return (i !== genres.length - 1 ? x.Name + ', ' : x.Name)
							}
						})}
					</Text>
				</View>
			</Card>
		</TouchableOpacity>
	</View>
);

export default MovieListItem;