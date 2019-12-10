import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCinemas } from '../../actions/cinemasActions';


import CinemaListItem from '../CinemaListItem';
import styles from './styles';
import { ActivityIndicator, View, FlatList } from 'react-native';

const CinemaList = () => {
	const dispatch = useDispatch();
	const cinemas = useSelector((state) => state.cinemas.data);
	const isLoading = useSelector((state) => state.cinemas.isLoading);

	React.useEffect(() => {
		dispatch(getAllCinemas());
	}, [dispatch]);

	return (
		isLoading
			? (
				<View style={styles.loadingIndicatorContainer}>
					<ActivityIndicator size="large" />
				</View>
			)
			: (
				<FlatList
					data={cinemas}
					renderItem={
						({ item }) => <CinemaListItem cinema={item} />
					}
					keyExtractor={(item) => `${item.id}_${item.name}`}
					style={styles.container}
				/>
			)
	);
};

export default CinemaList;