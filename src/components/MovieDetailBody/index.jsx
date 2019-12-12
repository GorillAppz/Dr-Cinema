import React from 'react';
import { View } from 'react-native';
import moment from 'moment';
import 'moment/locale/is';

import Text from '../Text';
import styles from './styles';
import { stringType, actorsType, directorsType } from '../../types/index';

const formatDate = (date) => {
	moment.locale('is');
	return moment(date).format('ll');
};


const parsePlot = (plot) => (plot.replace(/\n/g, ' '));

const MovieDetailBody = ({ plot, actors, directors, releaseDate }) => {
	const plotText = plot ? (
		<Text h5 style={styles.plot}>
			{parsePlot(plot)}
		</Text>
	) : null;

	const actorsText = actors ? (
		<Text>
			<Text style={styles.bold}>Aðalhlutverk: </Text>
			{actors.map((a, i) => (i < actors.length - 1 ? `${a.name}, ` : a.name))}
		</Text>
	) : null;

	const directorsText = directors ? (
		<Text>
			<Text style={styles.bold}>{directors.length > 1 ? 'Leikstjórar: ' : 'Leikstjóri: '}</Text>
			{directors.map((d, i) => (i < directors.length - 1 ? `${d.name}, ` : d.name))}
		</Text>
	) : null;

	const releaseDateText = releaseDate ? (
		<Text style={styles.releaseDate}>
			{`(Frumsýnd ${formatDate(releaseDate)})`}
		</Text>
	) : null;

	return (
		<View style={styles.container}>
			{releaseDateText}
			{plotText}
			{actorsText}
			{directorsText}
		</View>
	);
};

MovieDetailBody.propTypes = {
	plot: stringType,
	actors: actorsType,
	directors: directorsType,
	releaseDate: stringType
};

export default MovieDetailBody;