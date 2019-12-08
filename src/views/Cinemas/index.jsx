import React from 'react';
import { View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';

import Text from '../../components/Text';

import { getAllCinemas } from '../../actions/cinemasActions';

const Cinemas = ({ getAllCinemas, cinemas }) => {

	const handleViewFocus = () => {
		getAllCinemas();
	}

	return (
		<View>
			<NavigationEvents
				onWillFocus={() => handleViewFocus()}
			/>
			<Text>
				{JSON.stringify(cinemas, null, 2)}
			</Text>
		</View>
	);
};

const mapStateToProps = (state) => ({
	cinemas: state.cinemas
})

export default connect(mapStateToProps, { getAllCinemas })(Cinemas);