import React from 'react';
import { ScrollView, View } from 'react-native';
import CinemaDetailInfo from '../../components/CinemaDetailInfo';

import Text from '../../components/Text';
import styles from './styles';
import CinemaMovieList from '../../components/CinemaMovieList';

const CinemaDetail = ({ navigation }) => {
	const { cinema } = navigation.state.params;

	return (
		<ScrollView
			contentContainerStyle={styles.scrollViewContentContainer}
			stickyHeaderIndices={[1]}
			showsVerticalScrollIndicator={false}
			styles={styles.scrollView}
		>
			<CinemaDetailInfo cinema={cinema} />
			<View style={styles.nowShowingTextContainer}>
				<Text h4 style={styles.nowShowingText}>
					Í sýningu
				</Text>
			</View>
			<CinemaMovieList cinemaId={cinema.id} />
		</ScrollView>
	);
};

// CinemaDetail.navigationOptions = ({ navigation }) => ({
// 	title: navigation.state.params.cinema.name
// });

export default CinemaDetail;