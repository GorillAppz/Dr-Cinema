import React from 'react';
import { View, Image } from 'react-native';
import { useDispatch } from 'react-redux';

import { getAccessToken } from '../../actions/tokenActions';
import { BLACK } from '../../styles/colors';
import styles from './styles';

import logo from '../../resources/logo.png';
import textImage from '../../resources/text.png';

const Main = () => {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getAccessToken());
	}, [dispatch]);

	return (
		<View style={{ backgroundColor: BLACK }}>
			<View style={styles.logo}>
				<Image
					source={logo}
					style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
				/>
			</View>
			<View style={styles.text}>
				<Image
					source={textImage}
					style={{ width: '120%', height: '200%', resizeMode: 'contain' }}
				/>
			</View>
		</View>
	);
};

export default Main;