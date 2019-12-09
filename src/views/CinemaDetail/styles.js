import { StyleSheet } from 'react-native';
import { BLACK } from '../../styles/colors';

export default StyleSheet.create({
	scrollView: {
		flex: 1
	},
	scrollViewContentContainer: {
		flexGrow: 1
	},
	nowShowingTextContainer: {
		paddingVertical: 10,
		backgroundColor: BLACK,
		marginBottom: 0
	},
	nowShowingText: {
		textAlign: 'center',
		fontWeight: 'bold'
	}
});