import { StyleSheet } from 'react-native';
import { BLACK } from '../../styles/colors';

export default StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: BLACK,
		paddingBottom: 25,
		paddingTop: 10
	},
	button: {
		flexDirection: 'column',
		height: 40,
		backgroundColor: BLACK
	},
	title: {
		fontSize: 9
	}
});