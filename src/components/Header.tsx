import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export function Header(){
	return (
		<View style={styles.container}>
			<Text>
				Texto
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent : 'space-between',
		marginTop : getStatusBarHeight(),
		paddingVertical: 20,
		width: '100%',
	},
	
});