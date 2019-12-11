import React from 'react';
import { View } from 'react-native';
import Text from '../Text';
import styles from './styles';

const parsePlot = (plot) => (plot.replace(/\n/g, ' '));

const MovieDetailBody = ({ plot, actors, directors }) => {

	const parsedPlot = parsePlot(plot);

	return (
		<View style={styles.container}>
			<Text h5 style={styles.plot}>
				{parsedPlot}
			</Text>

			<Text>
				<Text style={styles.bold}>Aðalhlutverk: </Text>
				{actors.map((a, i) => (i < actors.length - 1 ? `${a.name}, ` : a.name))}
			</Text>

			<Text>
				<Text style={styles.bold}>{directors.length > 1 ? 'Leikstjórar: ' : 'Leikstjóri: '}</Text>
				{directors.map((d, i) => (i < directors.length - 1 ? `${d.name}, ` : d.name))}
			</Text>

		</View>
	);
};

export default MovieDetailBody;