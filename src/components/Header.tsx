import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import userImg from '../assets/vitor.jpg';

export function Header(){
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.greatings}>Olá,</Text>
				<Text style={styles.userName}>Vitor</Text>
			</View>

			<Image source={userImg}  style={styles.image}/>
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
	greatings: {
		color: colors.heading,
		fontFamily : fonts.text,
		fontSize: 32,
	},
	userName: {
		color: colors.heading,
		fontFamily : fonts.heading,
		fontSize: 32,
		lineHeight: 40,
	},
	image: {
		borderRadius : 35,
		height: 70,
		width: 70,
	},
	
});