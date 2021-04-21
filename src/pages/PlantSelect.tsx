import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';

import { Header } from '../components/Header';
import fonts from '../styles/fonts';
import { EnviromentButton } from '../components/EnviromentButton';

export function PlantSelect(){
	return (
		<View style={styles.container}>
			<View style={styles.header}>

				<Header />

				<Text style={styles.title}>Em qual ambiente</Text>
				<Text style={styles.subtitle}>você quer colocar sua planta?</Text>
				
				<EnviromentButton title="Cozinha" active />

			</View>
		</View>
	);
}


const styles = StyleSheet.create({
	container : {
		flex: 1,
		backgroundColor: colors.background
	},
	header :{
		paddingHorizontal: 30,
	},
	title :{
		color: colors.heading,
		fontFamily: fonts.heading,
		fontSize: 17,
		lineHeight: 20,
	},
	subtitle :{
		color: colors.heading,
		fontFamily: fonts.text,
		fontSize: 17,
		lineHeight: 20,
	}
})