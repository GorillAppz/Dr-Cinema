import React from 'react';
import { View } from 'react-native';

import MovieDetailHeader from '../MovieDetailHeader';
import styles from './styles';
import MovieDetailBody from '../MovieDetailBody';
import ShowtimeList from '../ShowtimeList';
import TrailerList from '../TrailerList';
import { movieType } from '../../types';


const MovieDetailContainer = ({ movie }) => (
	<View style={styles.container}>
		<MovieDetailHeader
			poster={movie.poster}
			title={movie.title}
			year={movie.year}
			duration={movie.durationMinutes}
			genres={movie.genres}
			altTitle={movie.alternativeTitles}
			rating={movie.ratings ? movie.ratings.imdb : null}
		/>
		<MovieDetailBody
			plot={movie.plot}
			actors={movie.actors_abridged}
			directors={movie.directors_abridged}
			releaseDate={movie['release-dateIS']}
		/>
		{movie.showtimes
			? (
				<ShowtimeList showtimes={movie.showtimes} />
			) : null}

		{movie.trailers.length > 0 && movie.trailers[0].results.length > 0
			? (
				<TrailerList trailers={movie.trailers} />
			) : null}
	</View>
);

MovieDetailContainer.propTypes = {
	movie: movieType
};

export default MovieDetailContainer;