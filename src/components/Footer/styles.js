import { StyleSheet } from 'react-native';
import { BLACK } from '../../styles/colors';

export default StyleSheet.create({
	container: {
		backgroundColor: BLACK,
		height: 75,
		justifyContent: 'center'
	},
	body: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	button: {
		flexDirection: 'column',
		backgroundColor: BLACK
	},
	title: {
		fontSize: 12
	}
});