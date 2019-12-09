import React from 'react';
import { View, StatusBar, Image } from 'react-native';
import { connect } from 'react-redux';
import { getAccessToken } from '../../actions/tokenActions';
import { BLACK } from '../../styles/colors';
import styles from './styles';

const Main = ({ getAccessToken }) => {
	StatusBar.setBarStyle('light-content');

	React.useEffect(() => {
		getAccessToken();
	}, []);

	return (
		<View style={{ backgroundColor: BLACK }}>
			<View style={styles.logo}>
				<Image
					source={require('../../resources/logo.png')}
					style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
				/>
			</View>
			<View style={styles.text}>
				<Image
					source={require('../../resources/text.png')}
					style={{ width: '120%', height: '200%', resizeMode: 'contain' }}
				/>
			</View>
		</View>
	);
};

const mapStateToProps = (state) => ({
	token: state.token
});

export default connect(mapStateToProps, { getAccessToken })(Main);