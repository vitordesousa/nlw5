import React, { useEffect, useState } from 'react';
/* 
	useEffect - Serve para executar alguma coisa quando a tela é carregada
	useState -  Para armazenar e setar estados
*/
import { StyleSheet, Text, Image, View } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import userImg from '../assets/vitor.jpg';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header(){

	const [ userName, setUserName ] = useState<string>();
	/* 
		No userEffect quando a array ali embaixo está vazia, só carrega uma vez o useEffect quando o usuário altera a informação pertinente à função interna. Mas se
		está preenchido com a const, ele carrega quantas vezes forem necessárias.
	*/
	useEffect(() => {
		/* 
			é criada uma função async dentro do useEffect porque o useEffect não aceita ser async, e então como o Asyncstorage é uma promise, ele precisa também do await, então o conteúdo
			só é renderizado na tela após ser pego do storage.
		*/
		async function loadStorageUserName(){
			const name = await AsyncStorage.getItem('@plantmanager:user')
			setUserName(name || ''); // faz a verificação de que se há uma string (no caso, não é nulo), ele guarda o nome do usuário na const userName
		}
		loadStorageUserName();
	}, []);




	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.greatings}>Olá,</Text>
				<Text style={styles.userName}>{userName}</Text>
			</View>

			<Image source={userImg}  style={styles.image}/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent : 'space-between',
		marginTop : getStatusBarHeight(),
		paddingVertical: 20,
		width: '100%',
	},
	greatings: {
		color: colors.heading,
		fontFamily : fonts.text,
		fontSize: 32,
	},
	userName: {
		color: colors.heading,
		fontFamily : fonts.heading,
		fontSize: 32,
		lineHeight: 40,
	},
	image: {
		borderRadius : 35,
		height: 70,
		width: 70,
	},
	
});