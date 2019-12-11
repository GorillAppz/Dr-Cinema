import React from 'react';
import { View } from 'react-native';
import { Image } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';
import Text from '../Text';
import { BLACK, ORANGE } from '../../styles/colors';

const MovieDetailHeader = ({ poster, title, altTitle, year, duration, genres }) => {
	return (
		<View style={styles.container}>
			<Image
				source={{ uri: poster }}
				style={styles.image}
				resizeMode="cover"
			>
				<LinearGradient
					colors={['transparent', BLACK]}
					style={styles.linearGradient}
					end={[0.5, 0.99]}
				>
					<View style={styles.textContainer}>
						<Text style={styles.info}>
							{genres.map((g, i) => (i < genres.length - 1 ? `${g.Name}    ` : g.Name))}
						</Text>
						<Text h1 style={styles.title}>{title}</Text>
						{
							altTitle
								? <Text style={styles.altTitle}>({altTitle})</Text>
								: null
						}
						<Text h4 style={styles.info}>{year}</Text>
						<View style={styles.durationContainer}>
							<Icon
								name="clock"
								color={ORANGE}
								size={18}
							/>
							<Text>
								{` ${duration} mínútur`}
							</Text>
						</View>
					</View>
				</LinearGradient>
			</Image>
		</View>
	);
};

export default MovieDetailHeader;