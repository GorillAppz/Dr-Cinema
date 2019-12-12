import { StyleSheet } from 'react-native';
import { ORANGE } from '../../styles/colors';

export default StyleSheet.create({
	container: {
		flex: 1
	},
	linearGradient: {
		flex: 1,
		justifyContent: 'flex-end'
	},
	image: {
		height: 615
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