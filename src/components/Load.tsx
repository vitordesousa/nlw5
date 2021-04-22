import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LottieView from 'lottie-react-native';

import loadAnimation from '../assets/load.json';


export function Load(){
	return (
		<View style={styles.container}>
			<LottieView source={loadAnimation} autoPlay loop style={styles.animation} />
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		alignItems : 'center',
		flex: 1,
		justifyContent : 'center',
	},
	animation : {
		backgroundColor: 'transparent',
		height: 200,
		width: 200,
	}
})