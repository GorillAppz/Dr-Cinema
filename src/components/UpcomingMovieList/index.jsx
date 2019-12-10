import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllUpcomingMovies } from '../../actions/upcomingMoviesActions';

import MovieList from '../MovieList';

const UpcomingMovieList = () => {
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.upcomingMovies.data);
	const isLoading = useSelector((state) => state.upcomingMovies.isLoading);

	React.useEffect(() => {
		dispatch(getAllUpcomingMovies());
	}, [dispatch]);

	const movieItemPressHandler = () => console.log('movie pressed!');

	return (
		<MovieList movies={movies} isLoading={isLoading} onItemPressHandler={movieItemPressHandler} showTrailerButton showReleaseDate />
	);
};

export default UpcomingMovieList;