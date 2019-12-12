import React from 'react';
import { ScrollView, View } from 'react-native';
import { useNavigationState } from 'react-navigation-hooks';
import * as Animatable from 'react-native-animatable';

import CinemaDetailInfo from '../../components/CinemaDetailInfo';

import Text from '../../components/Text';
import styles from './styles';
import CinemaMovieList from '../../components/CinemaMovieList';

const CinemaDetail = () => {
	const { cinema } = useNavigationState().params;

	return (
		<ScrollView
			contentContainerStyle={styles.scrollViewContentContainer}
			stickyHeaderIndices={[1]}
			showsVerticalScrollIndicator={false}
			styles={styles.scrollView}
		>
			<CinemaDetailInfo cinema={cinema} />
			<Animatable.View
				style={styles.nowShowingTextContainer}
				useNativeDriver
				animation="fadeIn"
			>
				<Text h4 style={styles.nowShowingText}>
					Í sýningu
				</Text>
			</Animatable.View>
			<CinemaMovieList cinemaId={cinema.id} />
		</ScrollView>
	);
};

CinemaDetail.navigationOptions = ({ navigation }) => ({
	title: navigation.state.params.cinema.name
});

export default CinemaDetail;