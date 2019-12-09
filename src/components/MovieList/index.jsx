import React from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import Text from '../Text';

import { getAllCinemaMovies } from '../../actions/cinemaMoviesActions';
import MovieListItem from '../MovieListItem';

import styles from './styles';


const MovieList = ({ cinemaId, getAllCinemaMovies, movies, isLoading }) => {
	React.useEffect(() => {
		getAllCinemaMovies(cinemaId);
	}, [cinemaId]);

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

const mapStateToProps = (state) => ({
	movies: state.cinemaMovies.data,
	isLoading: state.cinemaMovies.isLoading
});

export default connect(mapStateToProps, { getAllCinemaMovies })(MovieList);