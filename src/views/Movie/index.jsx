import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigationState } from 'react-navigation-hooks';
import MovieDetailContainer from '../../components/MovieDetailContainer';
import styles from './styles';


const Movie = () => {
	const { movie } = useNavigationState().params;
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