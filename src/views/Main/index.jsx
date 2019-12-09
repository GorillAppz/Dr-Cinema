import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { getAccessToken } from '../../actions/tokenActions';

import Text from '../../components/Text';
import Footer from '../../components/Footer';

const Main = ({ token, getAccessToken, navigation: { navigate } }) => {
	React.useEffect(() => {
		getAccessToken();
	}, []);

	return (
		<View>
			<Button
				title="Cinemas"
				onPress={() => navigate('Cinemas')}
			/>
		</View>
	);
};

const mapStateToProps = (state) => ({
	token: state.token
});

export default connect(mapStateToProps, { getAccessToken })(Main);