import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import Text from '../Text';
import TrailerListItem from '../TrailerListItem';
import styles from './styles';
import { trailersType } from '../../types';

const TrailerList = ({ trailers }) => {
	const icon = <Icon name="movie" iconStyle={styles.icon} size={30} containerStyle={styles.iconContainer} />;

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				{icon}
				<Text h4 style={styles.title}>Sýnishorn</Text>
				{icon}
			</View>
			<View>
				{
					trailers[0].results.map((item) => (
						<TrailerListItem trailer={item} key={item.id} />
					))
				}
			</View>
		</View>
	);
};

TrailerList.propTypes = {
	trailers: trailersType
};

export default TrailerList;