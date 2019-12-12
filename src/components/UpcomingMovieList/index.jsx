import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import MovieList from '../MovieList';

const UpcomingMovieList = () => {
	const movies = useSelector((state) => state.upcomingMovies.data);
	const isLoading = useSelector((state) => state.upcomingMovies.isLoading);
	const { navigate } = useNavigation();

	const movieItemPressHandler = (movie) => navigate('Movie', { movie });

	return (
		<MovieList
			movies={movies}
			isLoading={isLoading}
			onItemPressHandler={movieItemPressHandler}
			showReleaseDate
		/>
	);
};

export default (UpcomingMovieList);