import React from 'react';
import { Card, Button } from 'react-native-elements';

import Text from '../Text';

import styles from './styles';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';

const MovieListItem = ({ title, poster, year, genres, empty, showTrailerButton, hasTrailer, onPressHandler }) => (
	<TouchableOpacity style={{ flex: 1 }} onPress={onPressHandler}>
		<Card
			featuredTitle={title}
			featuredTitleStyle={styles.featureTitle}
			featuredSubtitle={year}
			image={{ uri: poster }}
			containerStyle={[styles.card, empty ? styles.empty : null]}
			imageStyle={styles.cardImage}
			imageProps={{ ...styles.cardImagePropStyle }}
			imageWrapperStyle={styles.cardImageWrapper}
			wrapperStyle={styles.cardWrapper}
		>
			<View style={{ flex: 1, alignContent: 'stretch' }}>

				<Text style={styles.text}>
					{genres && genres.map((x, i) => (i !== genres.length - 1 ? x.Name + ', ' : x.Name))}
				</Text>
				{
					!showTrailerButton
						? (
							<Button
								containerStyle={styles.trailerButtonContainer}
								disabled={hasTrailer}
								title="Sjá kerru"
							/>
						) : null
				}
			</View>
		</Card>
	</TouchableOpacity>
);

export default MovieListItem;