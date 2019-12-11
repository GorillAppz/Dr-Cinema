import React from 'react';
import { View } from 'react-native';

import MovieDetailHeader from '../MovieDetailHeader';
import styles from './styles';
import MovieDetailBody from '../MovieDetailBody';
import ShowtimeList from '../ShowtimeList';


const MovieDetailContainer = ({ movie }) => {
	return (
		<View style={styles.container}>
			<MovieDetailHeader
				poster={movie.poster}
				title={movie.title}
				year={movie.year}
				duration={movie.durationMinutes}
				genres={movie.genres}
				altTitle={movie.alternativeTitles}
			/>
			<MovieDetailBody
				plot={movie.plot}
				actors={movie.actors_abridged}
				directors={movie.directors_abridged}
			/>
			{movie.showtimes
				? (
					<ShowtimeList showtimes={movie.showtimes} />
				) : null
			}
		</View>
	);
};

export default MovieDetailContainer;