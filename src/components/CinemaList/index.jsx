import React from 'react';
import { useSelector } from 'react-redux';
import { ScrollView, FlatList } from 'react-native-gesture-handler';

import CinemaListItem from '../CinemaListItem';
import styles from './styles';

const CinemaList = () => {
	const cinemas = useSelector((state) => state.cinemas.data);
	return (
		<ScrollView style={styles.container}>
			<FlatList
				data={cinemas}
				renderItem={
					({ item }) => <CinemaListItem cinema={item} />
				}
				keyExtractor={(item) => `${item.id}_${item.name}`}
			/>
		</ScrollView>
	);
};

export default CinemaList;