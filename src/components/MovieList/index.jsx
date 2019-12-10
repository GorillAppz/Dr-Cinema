import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';

import MovieListItem from '../MovieListItem';

import styles from './styles';


const MovieList = ({ movies, isLoading, onItemPressHandler }) => {
	const formatData = (data, numColumns) => {
		const numFullRows = Math.floor(data.length / numColumns);
		let numElementsLastRow = data.length - (numFullRows * numColumns);
		while (numElementsLastRow !== numColumns && numElementsLastRow !== 0) {
			data.push({ key: `blank-${numElementsLastRow}`, empty: true });
			numElementsLastRow += 1;
		}
		return data;
	};

	return (
		<View style={styles.container}>
			{
				isLoading ? <ActivityIndicator size="large" />
					: (
						<FlatList
							data={formatData(movies, 2)}
							renderItem={({ item }) => {
								if (item.empty) {
									return <MovieListItem empty />;
								}
								return (
									<MovieListItem
										title={item.title}
										poster={item.poster}
										year={item.year}
										genres={item.genres}
										onPressHandler={() => onItemPressHandler(item)}
									/>
								);
							}}
							keyExtractor={(item) => `${item.id}_${item.title}`}
							numColumns={2}
							style={styles.flatlistContainer}
						/>
					)
			}
		</View>
	);
};

export default MovieList;