import React from 'react';
import { ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const TrailerButton = ({ setIsPlayingCallback }) => {
	const [isLoading, setIsLoading] = React.useState(false);

	const touchHandler = () => {
		setIsLoading(true);
		setIsPlayingCallback(true);
		setTimeout(() => { setIsLoading(false); }, 5000);
	};
	return (
		<TouchableOpacity style={styles.button} onPress={touchHandler}>
			{
				isLoading ? <ActivityIndicator style={styles.text} />
					: <Text style={styles.text}>Sýnishorn</Text>
			}
		</TouchableOpacity>
	);
};

export default TrailerButton;