import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from 'react-navigation-hooks';
import { getAllUpcomingMovies } from '../../actions/upcomingMoviesActions';
import MovieList from '../MovieList';

const UpcomingMovieList = () => {
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.upcomingMovies.data);
	const isLoading = useSelector((state) => state.upcomingMovies.isLoading);
	const { navigate } = useNavigation();

	React.useEffect(() => {
		dispatch(getAllUpcomingMovies());
	}, [dispatch]);

	const movieItemPressHandler = (movie) => navigate('Movie', { movie });

	return (
		<MovieList
			movies={movies}
			isLoading={isLoading}
			hideShowtimes
			onItemPressHandler={movieItemPressHandler}
			showReleaseDate
		/>
	);
};

export default (UpcomingMovieList);