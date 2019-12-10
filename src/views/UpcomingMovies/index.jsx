import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { getAllUpcomingMovies } from '../../actions/upcomingMoviesActions';
import MovieList from '../../components/MovieList/index';
import styles from './styles';

const UpcomingMovies = ({ getAllUpcomingMovies, upcomingMovies, isLoading }) => {
	React.useEffect(() => {
		getAllUpcomingMovies();
	}, []);
	console.log(upcomingMovies);

	return (
		<View style={styles.container}>
			{/* {
				isLoading
					? <ActivityIndicator size="large" />
					: <MovieList />
			} */}
		</View>
	);
};

const mapStateToProps = (state) => ({
	upcomingMovies: state.upcomingMovies.data,
	isLoading: state.upcomingMovies.isLoading
});

export default connect(mapStateToProps, { getAllUpcomingMovies })(UpcomingMovies);