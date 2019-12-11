import React from 'react';
import { ListItem } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import { useNavigation } from 'react-navigation-hooks';

import styles from './styles';
import { BLACK, GRAY } from '../../styles/colors';

const CinemaListItem = ({ cinema }) => {
	const { navigate } = useNavigation();

	const clickHandler = () => {
		navigate('CinemaDetail', { cinema });
	};

	return (
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
	);
};

export default CinemaListItem;