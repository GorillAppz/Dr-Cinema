import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

import Text from '../Text';
import styles from './styles';

const TrailerListItem = ({ trailer }) => (
	<View style={styles.trailerContainer}>
		<WebView
			allowsFullscreenVideo
			source={{ uri: `https://www.youtube.com/embed/${trailer.key}` }}
		/>
	</View>
);

export default TrailerListItem;