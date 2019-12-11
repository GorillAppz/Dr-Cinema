import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';

import Text from '../Text'
import TrailerListItem from '../TrailerListItem';
import styles from './styles';

const TrailerList = ({ trailers }) => {
	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Icon name="movie" iconStyle={styles.icon} size={30} containerStyle={styles.iconContainer} />
				<Text h4 style={styles.title}>Sýnishorn</Text>
				<Icon name="movie" iconStyle={styles.icon} size={30} containerStyle={styles.iconContainer} />
			</View>
			<View>
				{
					trailers[0].results.map((item) => (
						<TrailerListItem
							trailer={item}
							key={item.id}
						/>
					))
				}
			</View>
		</View>
	);
};

export default TrailerList;