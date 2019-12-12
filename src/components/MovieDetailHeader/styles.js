import { StyleSheet, Dimensions } from 'react-native';
import { ORANGE } from '../../styles/colors';

const window = Dimensions.get('window');
const ratio = window.width / 675;

export default StyleSheet.create({
	container: {
		flex: 1
	},
	linearGradient: {
		flex: 1,
		justifyContent: 'flex-end'
	},
	image: {
		alignSelf: 'stretch',
		width: window.width,
		height: 1000 * ratio
	},
	textContainer: {
		padding: '5%'
	},
	title: {
		fontWeight: 'bold'
	},
	info: {
		color: ORANGE
	},
	altTitle: {
		fontSize: 14,
		marginBottom: 10
	},
	iconAndText: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 5
	},
	durationAndRatingContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 5
	}
});