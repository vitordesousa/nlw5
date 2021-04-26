import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Image, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { SvgFromUri } from 'react-native-svg'
import DateTimePicker, {Event} from '@react-native-community/datetimepicker';

import waterdrop from '../assets/waterdrop.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { useNavigation, useRoute } from '@react-navigation/core';
import { format, isBefore } from 'date-fns';
import { PlantProps } from '../libs/storage';

interface Params {	
	plant: PlantProps
}

export function PlantSave(){

	const route = useRoute();
	const { plant } = route.params as Params;


	const [selectedDateTime, setSelectedDateTime] = useState(new Date());
	const [showDatePicker, setShowDatePicker] = useState(Platform.OS == 'ios')

	function handleChangeTime(event : Event, dateTime : Date | undefined){
		if(Platform.OS == 'android'){
			setShowDatePicker(oldState => !oldState);
		}

		if(dateTime && isBefore(dateTime, new Date()) ){
			setSelectedDateTime(new Date());
			return Alert.alert("Escolha uma hora no futuro! 🕐");
		}

		if(dateTime){
			setSelectedDateTime(dateTime)
		}
	}

	function handleOpenDateTimeForAndroid(){
		setShowDatePicker(oldState => !oldState);
	}

	return (
		<View style={styles.container}>
			<View style={styles.plantInfo}>
				<SvgFromUri uri={plant.photo} height={150} width={150} />
				<Text style={styles.plantName}>{ plant.name }</Text>
				<Text style={styles.plantDescription}> { plant.about} </Text>
			</View>
			<View style={styles.controller}>
				<View style={styles.tipContainer}>
					<Image source={waterdrop} style={styles.tipImage} />
					<Text style={styles.tipText}>
						{plant.water_tips}
					</Text>
				</View>
				<Text style={styles.alertLabel}>
					Escolha o melhor horário para ser lembrado:
				</Text>
				{
					Platform.OS == 'android' && (
						<TouchableOpacity onPress={handleOpenDateTimeForAndroid}  style={styles.dateTimePickerButton}>
							<Text style={styles.dateTimePickerText}>
								{`Mudar ${format(selectedDateTime, 'HH:mm')}`}
							</Text> 
						</TouchableOpacity>
					)
				}

				{showDatePicker && (<DateTimePicker value={selectedDateTime} mode="time" display="spinner" onChange={handleChangeTime} />)}

				<Button title="Cadastrar Planta" onPress={() => {}} />
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
	},
	dateTimePickerButton : {
		width: '100%',
		alignItems : 'center',
		paddingVertical : 40,
	},
	dateTimePickerText : {
		/* textAlign : 'center', */
		fontSize: 24,
		fontFamily: fonts.text,
		color: colors.heading,
	}

});