import React from 'react';
import { Card } from 'react-native-elements';
import { TouchableOpacity, View } from 'react-native';

import Text from '../Text';
import styles from './styles';
import { stringType, funcType, genresType } from '../../types/index';

const MovieListItem = ({ title, poster, releaseDate, genres, onPressHandler }) => (
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
						{
							genres.map((x, i) => {
								if (x.Name !== undefined) {
									return (i !== genres.length - 1 ? `${x.Name}, ` : x.Name);
								}
								return null;
							})
						}
					</Text>
				</View>
			</Card>
		</TouchableOpacity>
	</View>
);

MovieListItem.propTypes = {
	title: stringType,
	poster: stringType,
	releaseDate: stringType,
	genres: genresType,
	onPressHandler: funcType
};

export default MovieListItem;