import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import colors from '../styles/colors';

import wateringImg from '../assets/watering.png'
import { Button } from '../components/Button';

export function Welcome(){
	const [visible, setVisible] = useState(false);

	function handleVisible(){
		setVisible(true)
	}

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

			<Image source={wateringImg}  style={styles.image}/>

			<Text style={styles.subtitle}>
				Não esqueça mais de regar suas plantas.{'\n'}
				Nós cuidamos de lembrar você sempre que precisar.
			</Text>

			<Button title=">"  />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		fontSize : 32,
		fontWeight : 'bold',
		textAlign : 'center',
		color: colors.heading,
		marginTop : 38
	},
	image: {
		height : 292,
		width : 284,
	},
	subtitle: {
		textAlign : 'center',
		fontSize : 18,
		paddingHorizontal : 20,
		color: colors.heading,
	},
});
