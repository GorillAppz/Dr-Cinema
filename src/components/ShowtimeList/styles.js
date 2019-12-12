import { StyleSheet } from 'react-native';
import { ORANGE } from '../../styles/colors';

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginBottom: 25
	},
	title: {
		textAlign: 'center',
		fontWeight: 'bold',
		marginHorizontal: 15
	},
	titleContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	showtimesContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly'
	}
});