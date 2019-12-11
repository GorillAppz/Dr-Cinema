import React from 'react';
import { View, ScrollView } from 'react-native';

import MovieDetailContainer from '../../components/MovieDetailContainer';
import styles from './styles';


const Movie = ({ navigation }) => {
	const { movie } = navigation.state.params;
	return (
		<ScrollView
			style={styles.container}
		>
			<MovieDetailContainer movie={movie} />
		</ScrollView>
	);
};

Movie.navigationOptions = ({ navigation }) => ({
	title: navigation.state.params.movie.title
});

export default Movie;