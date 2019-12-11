import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from './styles';

const Trailer = ({ trailerKey }) => {
	console.log(trailerKey);
	return (
		<WebView
			source={{ uri: `https://www.youtube.com/watch?v=${trailerKey}` }}
		/>
	);
};

export default Trailer;