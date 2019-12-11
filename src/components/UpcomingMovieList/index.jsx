import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllUpcomingMovies } from '../../actions/upcomingMoviesActions';
import { withNavigation } from 'react-navigation';
import MovieList from '../MovieList';

const UpcomingMovieList = ({ navigation: { navigate } }) => {
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.upcomingMovies.data);
	const isLoading = useSelector((state) => state.upcomingMovies.isLoading);

	React.useEffect(() => {
		dispatch(getAllUpcomingMovies());
	}, [dispatch]);

	const movieItemPressHandler = (movie) => navigate('Movie', { movie });

	return (
		<MovieList movies={movies} isLoading={isLoading} hideShowtimes onItemPressHandler={movieItemPressHandler} showTrailerButton showReleaseDate />
	);
};

export default withNavigation(UpcomingMovieList);