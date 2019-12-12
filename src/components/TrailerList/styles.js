import { StyleSheet } from 'react-native';
import { ORANGE } from '../../styles/colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	titleContainer: {
		display: 'flex',
		flexDirection: 'row'
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		color: 'white'
	},
	icon: {
		color: ORANGE
	},
	iconContainer: {
		justifyContent: 'center',
		paddingHorizontal: 10
	}
});