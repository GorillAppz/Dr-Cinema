import React from 'react';
import { Card } from 'react-native-elements';
import { TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';


import Text from '../Text';
import styles from './styles';
import { stringType, funcType, genresType, numberType } from '../../types/index';

const MovieListItem = ({ title, poster, releaseDate, genres, onPressHandler, index }) => (
	<Animatable.View
		style={styles.container}
		animation="fadeInUp"
		delay={75 * index}
		useNativeDriver
	>
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
	</Animatable.View>
);

MovieListItem.propTypes = {
	title: stringType,
	poster: stringType,
	releaseDate: stringType,
	genres: genresType,
	onPressHandler: funcType,
	index: numberType
};

export default MovieListItem;