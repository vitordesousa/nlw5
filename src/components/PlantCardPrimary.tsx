import React from 'react';
import { StyleSheet, Text, Image, View  } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';


interface PlantProps extends RectButtonProps {
	data: {
		name : string;
		photo : string;
	}
}

export const PlantCardPrimary = ({ data, ... rest} : PlantProps) => {
	return (
		<RectButton style={styles.container} { ... rest}>
			<Text style={styles.text}> { data.name } </Text>
		</RectButton>
	)
}



const styles = StyleSheet.create({
	container : {
		alignItems: 'center',
		backgroundColor: colors.shape,
		borderRadius: 20,
		flex: 1,
		margin: 10,
		maxWidth : '45%',
		paddingVertical : 10,
	},
	text : {
		color:  colors.green_dark,
		fontFamily: fonts.heading,
		marginVertical: 16
	}
})