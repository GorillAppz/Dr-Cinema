import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import moment from 'moment';
import 'moment/locale/is';

import MovieListItem from '../MovieListItem';
import EmptyMovies from '../EmptyMovies';
import styles from './styles';
import { moviesType, boolType, funcType } from '../../types';


const formatDate = (date) => {
	moment.locale('is');
	return moment(date).format('ll');
};

const MovieList = ({ movies, isLoading, onItemPressHandler, showReleaseDate }) => (
	<View style={styles.container}>
		{isLoading ? <ActivityIndicator size="large" />
			: (
				<View style={styles.itemsContainer}>
					{
						movies.length ? movies.map((movie) => (
							<MovieListItem
								key={`${movie.id}_${movie.name}`}
								title={movie.title}
								poster={movie.poster}
								releaseDate={showReleaseDate ? formatDate(movie['release-dateIS']) : movie.year}
								genres={movie.genres}
								onPressHandler={() => onItemPressHandler(movie)}
							/>
						))
							: <EmptyMovies />
					}
				</View>
			)}
	</View>
);

MovieList.propTypes = {
	movies: moviesType,
	isLoading: boolType,
	onItemPressHandler: funcType,
	showReleaseDate: boolType
};

export default MovieList;