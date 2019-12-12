/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React from 'react';
import { View } from 'react-native';
import { Image } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import Text from '../Text';
import { BLACK, ORANGE } from '../../styles/colors';
import { stringType, numberType, genresType } from '../../types/index';

const MovieDetailHeader = ({ poster, title, altTitle, year, duration, rating, genres }) => {
	const altTitleText = altTitle ? (
		<Text style={styles.altTitle}> ({altTitle}) </Text>
	) : null;

	const durationText = duration ? (
		<View style={styles.iconAndText}>
			<Icon name="clock" color={ORANGE} size={18} />
			<Text>
				{` ${duration} mínútur`}
			</Text>
		</View>
	) : null;

	const ratingText = rating ? (
		<View style={styles.iconAndText}>
			<Icon name="imdb" color={ORANGE} size={25} />
			<Text>
				{` ${rating}`}
			</Text>
		</View>
	) : null;

	const genresText = genres ? (
		<Text style={styles.info}>
			{genres.map((g, i) => {
				if (g.Name !== undefined) {
					return (i < genres.length - 1 ? `${g.Name}    ` : g.Name);
				}
			})}
		</Text>
	) : null;

	return (
		<View style={styles.container}>
			<Image
				source={{ uri: poster }}
				style={styles.image}
				resizeMode="cover"
			>
				<LinearGradient
					colors={['transparent', BLACK]}
					style={styles.linearGradient}
					start={[0.5, 0]}
					end={[0.5, 0.97]}
				>
					<View style={styles.textContainer}>
						{genresText}
						<Text h3 style={styles.title}>{title}</Text>
						{altTitleText}
						<Text h4 style={styles.info}>{year}</Text>
						{duration || rating ? (
							<View style={styles.durationAndRatingContainer}>
								{durationText}
								{ratingText}
							</View>
						) : null }
					</View>
				</LinearGradient>
			</Image>
		</View>
	);
};

MovieDetailHeader.propTypes = {
	poster: stringType,
	title: stringType,
	altTitle: stringType,
	year: stringType,
	duration: numberType,
	rating: stringType,
	genres: genresType
};

export default MovieDetailHeader;