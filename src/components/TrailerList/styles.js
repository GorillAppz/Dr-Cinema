import { StyleSheet } from 'react-native';
import { ORANGE } from '../../styles/colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginVertical: 10
	},
	titleContainer: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: 15
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