import React from 'react';
import { ScrollView } from 'react-native';

import UpcomingMovieList from '../../components/UpcomingMovieList';
import styles from './styles';

const UpcomingMovies = () => {

	return (
		<ScrollView contentContainerStyle={styles.scrollViewContentContainer} style={styles.scrollView}>
			<UpcomingMovieList />
		</ScrollView>
	);
};

UpcomingMovies.navigationOptions = {
	title: 'Væntanlegt'
};


export default UpcomingMovies;