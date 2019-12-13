import React from 'react';
import { ListItem } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import { useNavigation } from 'react-navigation-hooks';
import * as Animatable from 'react-native-animatable';

import styles from './styles';
import { BLACK, GRAY } from '../../styles/colors';
import { cinemaType, numberType } from '../../types/index';

const CinemaListItem = ({ cinema, index }) => {
	const { navigate } = useNavigation();

	const clickHandler = () => {
		navigate('CinemaDetail', { cinema });
	};

	return (
		<Animatable.View
			animation="fadeIn"
			delay={50 * index}
			useNativeDriver
		>
			<ListItem
				onPress={clickHandler}
				containerStyle={styles.listItem}
				Component={TouchableScale}
				friction={90}
				tension={100}
				activeScale={0.95}
				linearGradientProps={{
					colors: [GRAY, BLACK],
					start: [1, 0],
					end: [0.2, 0]
				}}
				title={cinema.name}
				titleStyle={{ color: 'white', fontWeight: 'bold' }}
				subtitleStyle={{ color: 'white' }}
				subtitle={cinema.website}
				chevron={{ color: 'white' }}
			/>
		</Animatable.View>
	);
};

CinemaListItem.propTypes = {
	cinema: cinemaType,
	index: numberType
};

export default CinemaListItem;