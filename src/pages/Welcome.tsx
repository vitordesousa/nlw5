import React from 'react';
import { StyleSheet, Text, Image, SafeAreaView, TouchableOpacity, Dimensions, View } from 'react-native';
import colors from '../styles/colors'; // Tem um arquivo chamado colors em /src/styles/colors.ts que é responsável por ter todas as cores do projeto. Ao ser importado é só usar colors.nomeDaCor que ele já funciona
import fonts from '../styles/fonts'; // Tem um arquivo chamado fonts em /src/styles/fonts.ts que é responsável por ter todas as fontes do projeto. Ao ser importado é só usar fonts.nomeDaCor que ele já funciona
import {Feather} from '@expo/vector-icons'

import wateringImg from '../assets/watering.png'
import { useNavigation } from '@react-navigation/core';

export function Welcome(){
	/*
		Anotações: 
		{'\n'} é usado para  pular linha dentro do texto, já que a tag <br> não funciona		
		Criei um arquivo na raiz com o nome custom.d.ts que é um arquivo de configurações onde ele para dar dar erro em todas as imagens ".png"
		SafeAreaView serve para que todos os elementos estejam dentro da área de visualização, e não talvez dentro da tabbar, ou de algum botão físico, ou do fone do celular
	*/

	const navigation = useNavigation();

	function handleStart(){
		navigation.navigate('UserIdentification')
	}



	return (
		<SafeAreaView style={styles.container}> 
			<View  style={styles.wrapper}>
				<Text style={styles.title}>
					Gerencie{'\n'}
					suas plantas de{'\n'}
					forma fácil
				</Text>

				<Image source={wateringImg}  style={styles.image} resizeMode="contain"/>

				<Text style={styles.subtitle}>
					Não esqueça mais de regar suas plantas.{'\n'}
					Nós cuidamos de lembrar você sempre que precisar.
				</Text>

				<TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleStart}>
					<Feather name="chevron-right"  style={styles.buttonIcon} />
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	wrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingHorizontal: 20
	},
	title: {
		color: colors.heading,
		fontFamily: fonts.heading,
		fontSize : 28,
		lineHeight: 34,
		marginTop : 38,
		textAlign : 'center',
	},
	image: {
		height : Dimensions.get('window').width * 0.7, // Dimensions serve para conseguir pegar o tamanho da tela do dispositivo, assim você não precisa colocar um tamanho fixo para a imagem, já que ela vai se adaptar automaticamente de acordo com o mesmo
	},
	subtitle: {
		fontFamily: fonts.text,
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
