import React from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { useSelector, useDispatch } from 'react-redux';
import * as Animatable from 'react-native-animatable';

import { getMoviesByCinemaId } from '../../actions/cinemaMoviesActions';
import MovieList from '../MovieList';
import { numberType } from '../../types';


const CinemaMovieList = ({ cinemaId }) => {
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(getMoviesByCinemaId(cinemaId));
	}, [dispatch, cinemaId]);

	const { navigate } = useNavigation();
	const movies = useSelector((state) => state.cinemaMovies.data);
	const isLoading = useSelector((state) => state.cinemaMovies.isLoading);

	const movieItemPressHandler = (movie) => navigate('Movie', { movie });

	return (
		<Animatable.View
			animation="fadeInUp"
			useNativeDriver
		>
			<MovieList movies={movies} isLoading={isLoading} onItemPressHandler={movieItemPressHandler} />
		</Animatable.View>
	);
};

CinemaMovieList.propTypes = {
	cinemaId: numberType.isRequired
};

export default CinemaMovieList;