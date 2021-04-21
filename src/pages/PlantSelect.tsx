import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import colors from '../styles/colors';

import { Header } from '../components/Header';
import fonts from '../styles/fonts';
import { EnviromentButton } from '../components/EnviromentButton';
/* 
	Anotações: 
	FlatList serve para fazer uma listagem através de um array (ou json, acredito eu). É como fazer um for/foreach, mas tem algumas opções interessantes
*/
export function PlantSelect(){
	return (
		<View style={styles.container}>
			<View style={styles.header}>

				<Header />

				<Text style={styles.title}>Em qual ambiente</Text>
				<Text style={styles.subtitle}>você quer colocar sua planta?</Text>
			</View>
			
			<View>
				<FlatList data={[1, 2, 3, 4, 5, 6, 7, 8]} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.enviromentList} renderItem={(item) => (
					<EnviromentButton title="Cozinha" active />
				)} />
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
	},
	enviromentList: {
		height: 40,
		justifyContent : 'center',
		marginLeft: 32,
		marginVertical: 32,
		paddingBottom: 5,
	}
})