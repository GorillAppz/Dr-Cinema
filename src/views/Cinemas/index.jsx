import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import CinemaList from '../../components/CinemaList';

import { getAllCinemas } from '../../actions/cinemasActions';
import { getAllMovies } from '../../actions/moviesAction';
import styles from './styles';

const Cinemas = () => {
	const dispatch = useDispatch();
	const cinemasLoading = useSelector((state) => state.cinemas.isLoading);
	const moviesLoading = useSelector((state) => state.movies.isLoading);

	React.useEffect(() => {
		dispatch(getAllCinemas());
		dispatch(getAllMovies());
	}, [dispatch]);

	return (
		<View style={styles.container}>
			{
				(cinemasLoading || moviesLoading)
					? (
						<View style={styles.loadingIndicatorContainer}>
							<ActivityIndicator size="large" />
						</View>
					) : (
						<CinemaList />
					)
			}
		</View>
	);
};

Cinemas.navigationOptions = {
	title: 'Kvikmyndahús'
};

export default Cinemas;