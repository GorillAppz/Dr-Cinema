import React from 'react';
import { View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';

import { getAllCinemas } from '../../actions/cinemasActions';
import CinemaList from '../../components/CinemaList';

const Cinemas = ({ getAllCinemas, cinemas }) => {
	const handleViewFocus = () => {
		getAllCinemas();
	};

	return (
		<View>
			<NavigationEvents
				onWillFocus={() => handleViewFocus()}
			/>
			<CinemaList />
		</View>
	);
};

Cinemas.navigationOptions = {
	title: 'Kvikmyndahús'
};

const mapStateToProps = (state) => ({
	cinemas: state.cinemas
});

export default connect(mapStateToProps, { getAllCinemas })(Cinemas);