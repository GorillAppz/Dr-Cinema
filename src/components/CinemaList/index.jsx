import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, FlatList } from 'react-native-gesture-handler';

import CinemaListItem from '../CinemaListItem';
import styles from './styles';
import { cinemasType } from '../../types';

const CinemaList = ({ cinemas }) => {
	console.log(cinemas);
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

CinemaList.propTypes = {
	cinemas: cinemasType.isRequired
};

const mapStateToProps = (state) => ({
	cinemas: state.cinemas
});

export default connect(mapStateToProps)(CinemaList);