import React from 'react';
import { View } from 'react-native';
import CinemaDetailInfo from '../../components/CinemaDetailInfo';
import MovieList from '../../components/MovieList';

const CinemaDetail = ({ navigation }) => {
	const { cinema } = navigation.state.params;
	return (
		<View>
			<CinemaDetailInfo cinema={cinema} />
			<MovieList cinemaId={cinema.id} />
		</View>
	);
};

export default CinemaDetail;