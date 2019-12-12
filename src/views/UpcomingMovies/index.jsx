import React from 'react';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';

import UpcomingMovieList from '../../components/UpcomingMovieList';

import { getAllUpcomingMovies } from '../../actions/upcomingMoviesActions';

import styles from './styles';

const UpcomingMovies = () => {
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(getAllUpcomingMovies());
	}, [dispatch]);

	return (
		<ScrollView
			contentContainerStyle={styles.scrollViewContentContainer}
			style={styles.scrollView}
		>
			<UpcomingMovieList />
		</ScrollView>
	);
};

UpcomingMovies.navigationOptions = {
	title: 'Væntanlegt'
};


export default UpcomingMovies;