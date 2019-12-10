import { StyleSheet } from 'react-native';
import { DARK_GRAY, BLUE } from '../../styles/colors';

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
	},
	linkText: {
		color: BLUE,
		fontStyle: 'italic',
		textDecorationLine: 'underline'
	}
});