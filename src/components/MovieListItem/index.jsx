import React from 'react';
import { Card, Button } from 'react-native-elements';

import Text from '../Text';

import styles from './styles';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import Trailer from '../Trailer';
import TrailerButton from '../TrailerButton';

const MovieListItem = ({ title, poster, releaseDate, genres, empty, showTrailerButton, hasTrailer, trailerKey }) => {
	const [isPlaying, setIsPlaying] = React.useState(false);
	const onPressHandler = () => {
	};
	const trainerHandler = () => {
		setIsPlaying(true);
	};
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.touchContainer} onPress={onPressHandler}>
				<Card
					featuredTitle={title}
					featuredTitleStyle={styles.featureTitle}
					featuredSubtitle={releaseDate}
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
					</View>
				</Card>

			</TouchableOpacity>
			{
				showTrailerButton
					? (
						<TrailerButton setIsPlayingCallback={trainerHandler} />
					) : null
			}
			{isPlaying ? <Trailer trailerKey={trailerKey} /> : null}
		</View>
	);
};

export default MovieListItem;