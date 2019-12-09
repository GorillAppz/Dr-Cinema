import React from 'react';
import { ListItem } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import { withNavigation } from 'react-navigation';

import styles from './styles';
import { BLACK, DARK_GRAY } from '../../styles/colors';

const CinemaListItem = ({ cinema, navigation: { navigate } }) => {
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
				colors: [DARK_GRAY, BLACK],
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

export default withNavigation(CinemaListItem);