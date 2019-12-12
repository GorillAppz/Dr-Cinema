import { StyleSheet } from 'react-native';
import { DARK_GRAY } from '../../styles/colors';

export default StyleSheet.create({
	card: {
		borderRadius: 10,
		backgroundColor: DARK_GRAY,
		borderWidth: 0
	},
	boldText: {
		fontWeight: 'bold'
	},
	descriptionText: {
		fontStyle: 'italic',
		marginBottom: 20
	}
});