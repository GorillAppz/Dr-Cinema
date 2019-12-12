import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

export default StyleSheet.create({
	trailerContainer: {
		display: 'flex',
		justifyContent: 'center',
		height: window.width * 0.80,
		width: window.width * 0.925,
		marginVertical: 10,
		borderRadius: 20,
		overflow: 'hidden'
	}
});