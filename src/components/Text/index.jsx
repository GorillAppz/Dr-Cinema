import React from 'react';
import { Text } from 'react-native-elements';
import HTML from 'react-native-render-html';
import styles from './styles';


const CustomText = ({ children, style, isHTML, ...props }) => {
	const commonStyle = { ...styles.text, ...style };

	return (
		isHTML
			? (
				<HTML
					{...props}
					baseFontStyle={commonStyle}
					html={children}
				/>
			)
			: (
				<Text {...props} style={commonStyle}>
					{children}
				</Text>
			)
	);
}

export default CustomText;