import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

import styles from './styles';
import { trailerResultType } from '../../types';

const loadingView = (
	<View style={styles.loadingView}>
		<ActivityIndicator size="large" />
	</View>
);

const TrailerListItem = ({ trailer }) => (
	<View style={styles.trailerContainer}>
		<WebView
			allowsFullscreenVideo
			startInLoadingState
			renderLoading={() => loadingView}
			scrollEnabled={false}
			source={{ uri: `https://www.youtube.com/embed/${trailer.key}` }}
			style={styles.trailer}
		/>
	</View>
);

TrailerListItem.propTypes = {
	trailer: trailerResultType
};

export default TrailerListItem;