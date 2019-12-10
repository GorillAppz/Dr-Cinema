import { StyleSheet } from 'react-native';
import { DARK_GRAY, BLACK } from '../../styles/colors';

export default StyleSheet.create({
	container: {
		width: '50%'
	},
	card: {
		backgroundColor: BLACK,
		borderWidth: 0,
		overflow: 'hidden',
		flex: 1,
		marginVertical: 20
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
		fontSize: 10,
		flexGrow: 1,
		margin: 5,
		textAlign: 'center'
	},
	empty: {
		opacity: 0
	},
	cardWrapper: {
		flex: 1,
		padding: 0
	},
	cardImageWrapper: {
		flex: 1
	},
	trailerButtonContainer: {
		alignSelf: 'flex-end',
		width: '100%',
		marginTop: 5,
		marginBottom: 20
	}
});