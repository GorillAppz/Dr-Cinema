import { StyleSheet } from 'react-native';
import { DARK_GRAY, BLACK } from '../../styles/colors';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	card: {
		backgroundColor: BLACK,
		borderWidth: 0,
		borderRadius: 5,
		overflow: 'hidden',
		marginTop: 5,
	},
	featureTitle: {
		paddingHorizontal: 10,
		textAlign: 'center'
	},
	cardImage: {
		height: 250,
		backgroundColor: 'rgba(0,0,0,0.3)',
		borderRadius: 10,
		overflow: 'hidden'
	},
	cardImagePropStyle: {
		borderRadius: 10
	},
	text: {
		color: 'white',
		fontSize: 12
	},
	empty: {
		opacity: 0
	}
});