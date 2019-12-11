import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCinemaMovies } from '../../actions/cinemaMoviesActions';
import MovieList from '../MovieList';
import { useNavigation } from 'react-navigation-hooks'


const CinemaMovieList = ({ cinemaId }) => {
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.cinemaMovies.data);
	const isLoading = useSelector((state) => state.cinemaMovies.isLoading);
	const { navigate } = useNavigation();

	React.useEffect(() => {
		dispatch(getAllCinemaMovies(cinemaId));
	}, [dispatch, cinemaId]);

	const movieItemPressHandler = (movie) => navigate('Movie', { movie });

	return (
		<MovieList movies={movies} isLoading={isLoading} onItemPressHandler={movieItemPressHandler} />
	);
};

export default CinemaMovieList;