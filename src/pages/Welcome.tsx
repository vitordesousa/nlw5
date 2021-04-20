import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import colors from '../styles/colors';
import {Feather} from '@expo/vector-icons'

import wateringImg from '../assets/watering.png'

export function Welcome(){

	/*
		Anotações: 
		{'\n'} é usado para  pular linha dentro do texto, já que a tag <br> não funciona
		Tem um arquivo chamado colors em /src/styles/colors.ts que é responsável por ter todas as cores do projeto. Ao ser importado é só usar colors.nomeDaCor que ele já funciona
		Criei um arquivo na raiz com o nome custom.d.ts que é um arquivo de configurações onde ele para dar dar erro em todas as imagens ".png"
	*/

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>
				Gerencie{'\n'}
				suas plantas{'\n'}
				de forma fácil
			</Text>

			<Image source={wateringImg}  style={styles.image} resizeMode="contain"/>

			<Text style={styles.subtitle}>
				Não esqueça mais de regar suas plantas.{'\n'}
				Nós cuidamos de lembrar você sempre que precisar.
			</Text>

			<TouchableOpacity style={styles.button} activeOpacity={0.7}>
				<Feather name="chevron-right"  style={styles.buttonIcon} />
			</TouchableOpacity>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	title: {
		fontSize : 32,
		fontWeight : 'bold',
		textAlign : 'center',
		color: colors.heading,
		marginTop : 38
	},
	image: {
		height : Dimensions.get('window').width * 0.7,
	},
	subtitle: {
		textAlign : 'center',
		fontSize : 18,
		paddingHorizontal : 20,
		color: colors.heading,
	},
	
	button: {
		alignItems: 'center',
		backgroundColor : colors.green,
		borderRadius : 16,
		height : 56,
		width : 56,
		justifyContent : 'center',
		marginBottom : 10,
	},
	buttonIcon : {
		fontSize : 32,
		color: colors.white,
	}
});
