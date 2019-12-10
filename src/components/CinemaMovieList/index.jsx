import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { getAllCinemaMovies } from '../../actions/cinemaMoviesActions';
import MovieList from '../MovieList';


const CinemaMovieList = ({ cinemaId, navigation: { navigate } }) => {
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.cinemaMovies.data);
	const isLoading = useSelector((state) => state.cinemaMovies.isLoading);

	React.useEffect(() => {
		dispatch(getAllCinemaMovies(cinemaId));
	}, [dispatch, cinemaId]);

	const movieItemPressHandler = (movie) => navigate('Movie', { movie });

	return (
		<MovieList movies={movies} isLoading={isLoading} onItemPressHandler={movieItemPressHandler} />
	);
};

export default withNavigation(CinemaMovieList);