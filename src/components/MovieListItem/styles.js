import { StyleSheet } from 'react-native';
import { DARK_GRAY, BLACK } from '../../styles/colors';

export default StyleSheet.create({
	container: {
		flex: 1
	},
	card: {
		backgroundColor: BLACK,
		borderWidth: 0,
		overflow: 'hidden',
		flex: 1,
		marginTop: 5
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
	cardBottomArea: {
		borderWidth: 10,
		display: 'flex',
		flex: 1
	},
	text: {
		color: 'white',
		fontSize: 12,
		flexGrow: 1
	},
	empty: {
		opacity: 0
	},
	cardWrapper: {
		flex: 1
	},
	cardImageWrapper: {
		flex: 1
	},
	trailerButtonContainer: {
		alignSelf: 'flex-end',
		width: '100%'
	}
});