import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';

import CinemaListItem from '../CinemaListItem';

const CinemaList = () => {
	const cinemas = useSelector((state) => state.cinemas.data);
	return (
		<FlatList
			data={cinemas}
			renderItem={
				({ item, index }) => <CinemaListItem cinema={item} index={index} />
			}
			keyExtractor={(item) => `${item.id}_${item.name}`}
		/>
	);
};

export default CinemaList;