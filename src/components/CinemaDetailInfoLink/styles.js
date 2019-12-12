import { StyleSheet } from 'react-native';
import { BLUE } from '../../styles/colors';

export default StyleSheet.create({
	iconAndTextContainer: {
		display: 'flex',
		flexDirection: 'row',
		marginVertical: 5
	},
	icon: {
		marginHorizontal: 10
	},
	text: {
		color: BLUE,
		fontStyle: 'italic',
		textDecorationLine: 'underline'
	}
});