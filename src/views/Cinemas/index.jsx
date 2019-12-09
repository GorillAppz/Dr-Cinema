import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { getAllCinemas } from '../../actions/cinemasActions';
import CinemaList from '../../components/CinemaList';
import styles from './styles';

const Cinemas = ({ getAllCinemas, cinemas, isLoading }) => {

	React.useEffect(() => {
		getAllCinemas();
	}, []);


	return (
		<View style={styles.container}>
			{
				isLoading
					? <ActivityIndicator size="large" />
					: <CinemaList />
			}
		</View>
	);
};

Cinemas.navigationOptions = {
	title: 'Kvikmyndahús'
};

const mapStateToProps = (state) => ({
	cinemas: state.cinemas.data,
	isLoading: state.cinemas.isLoading
});

export default connect(mapStateToProps, { getAllCinemas })(Cinemas);