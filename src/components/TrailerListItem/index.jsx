import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

import styles from './styles';
import { trailerResultType } from '../../types';

const TrailerListItem = ({ trailer }) => (
	<View style={styles.trailerContainer}>
		<WebView
			allowsFullscreenVideo
			scrollEnabled={false}
			source={{ uri: `https://www.youtube.com/embed/${trailer.key}` }}
		/>
	</View>
);

TrailerListItem.propTypes = {
	trailer: trailerResultType
};

export default TrailerListItem;