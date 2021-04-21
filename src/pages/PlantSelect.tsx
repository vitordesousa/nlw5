import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';


export function PlantSelect(){
	return (
		<View style={styles.container}>
			<Text>Selecione uma planta</Text>
		</View>
	);
}


const styles = StyleSheet.create({
	container : {
		flex: 1,
		backgroundColor: colors.background
	}
})