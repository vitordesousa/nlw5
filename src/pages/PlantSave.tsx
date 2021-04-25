import React from 'react';
import { Alert, StyleSheet, Text, View, Image, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { SvgFromUri } from 'react-native-svg'

import waterdrop from '../assets/waterdrop.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';

export function PlantSave(){
	return (
		<View style={styles.container}>
			<View style={styles.plantInfo}>
				<SvgFromUri uri="" height={150} width={150} />
				<Text style={styles.plantName}>Nome Da Planta</Text>
				<Text style={styles.plantDescription}> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi rerum ut, tempore, velit sit iste similique illum ad a distinctio corporis voluptatum asperiores obcaecati molestias ab magnam sapiente, quos nemo?</Text>
			</View>
			<View style={styles.controller}>
				<View style={styles.tipContainer}>
					<Image source={waterdrop} style={styles.tipImage} />
					<Text style={styles.tipText}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quod eligendi aliquam consectetur unde et, est atque, voluptate blanditiis, ullam soluta ipsum numquam sequi porro totam facere! Odio, dolore dolorum!
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

	},
	plantName : {

	},
	plantDescription :{

	},
	controller :{

	},
	tipContainer :{

	},
	tipImage : {

	},
	tipText : {

	},
	alertLabel : {

	}

});