import React from 'react';
import { Alert, StyleSheet, Text, View, Image, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { SvgFromUri } from 'react-native-svg'

import waterdrop from '../assets/waterdrop.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function PlantSave(){
	return (
		<View style={styles.container}>
			<View style={styles.plantInfo}>
				<SvgFromUri uri="" height={150} width={150} />
				<Text style={styles.plantName}>Nome Da Planta</Text>
				<Text style={styles.plantDescription}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi rerum ut, tempore, velit sit iste similique illum ad a distinctio </Text>
			</View>
			<View style={styles.controller}>
				<View style={styles.tipContainer}>
					<Image source={waterdrop} style={styles.tipImage} />
					<Text style={styles.tipText}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</Text>
				</View>
				<Text style={styles.alertLabel}>
					Escolha o melhor horário para ser lembrado:
				</Text>

				<Button title="Cadastrar Plantar" onPress={() => {}} />
			</View>
		</View>
	)
}


const styles = StyleSheet.create({
	container : {
		flex: 1,
		justifyContent : 'space-between',
		backgroundColor: colors.shape
	},
	plantInfo :{
		flex: 1,
		paddingHorizontal: 30,
		paddingVertical: 50,
		alignItems : 'center',
		justifyContent: 'center',
		backgroundColor: colors.shape,
	},
	plantName : {
		fontFamily : fonts.heading,
		fontSize: 24,
		color: colors.heading,
		marginTop: 15
	},
	plantDescription :{
		textAlign : 'center',
		fontFamily: fonts.text,
		fontSize : 17,
		color: colors.heading,
		marginTop: 10
	},
	controller :{
		backgroundColor : colors.white,
		paddingHorizontal: 20,
		paddingTop: 20,
		paddingBottom : getBottomSpace() || 20 // se estiver no iphone irá retornar o valor necessário, se estiver no android, irá colocar 20
	},
	tipContainer :{
		flexDirection : 'row',
		justifyContent : 'space-between',
		alignItems : 'center',
		padding: 20,
		backgroundColor: colors.blue_light,
		borderRadius: 20,
		position: 'relative',
		bottom: 60
	},
	tipImage : {
		height: 56,
		width: 56,
	},
	tipText : {
		flex: 1,
		marginLeft: 20,
		fontFamily: fonts.text,
		color: colors.blue,
		fontSize : 17,
		textAlign : 'justify'
	},
	alertLabel : {
		textAlign : 'center',
		fontFamily: fonts.complement,
		color: colors.heading,
		fontSize: 12,
		marginBottom : 5
	}

});